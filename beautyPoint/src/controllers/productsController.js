const JsonModel = require("../modelos/jsonModel");
const productsModel = new JsonModel("products");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const productsController = {
  // Create - Render del formulario de creación de un producto
  create: (req, res) => {
    console.log("entrando al método create del productController.js");
    //Hay vs pedidos asincrónicos. Los defino por separado:
    let pedidoPackage = db.Package.findAll({
      include: [{ association: "productosP" }],
    });
    let pedidoCategory = db.Category.findAll({
      include: [{ association: "productosC" }],
    });
    Promise.all([pedidoPackage, pedidoCategory])
      //cuando obtenga todos los pedidos, recién ahí realiza el "then"
      .then(function ([packages, categories]) {
        return res.status(200).render("./products/create", {
          packages: packages,
          categories: categories,
        });
      })
      .catch((err) => res.send(err));
  },

  // Store -  Método que persiste la data del formulario de creación de un producto
  store: (req, res) => {
    let errors = validationResult(req);
    //res.send(errors);
    if (errors.isEmpty()) {
      //hay errores en la validación??
      console.log("Entró al método store del productController.js");
      //console.log(req.file);
      req.body.image = "/images/products/" + req.file.filename;
      db.Product.create({
        //1ro nombre de las columnas BBDD, igual que en el modelo. 2do nombre del campo del formulario
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        //discount: req.body.discount - Falta agregarlo en la vista
        package_id: req.body.package,
        category_id: req.body.category,
        image: req.body.image,
        //stock: req.body.stock - Falta agregarlo en la vista
        status: 1,
      });
      res.redirect("/");
    } else {
      let pedidoPackage = db.Package.findAll({
        include: [{ association: "productosP" }],
      });
      let pedidoCategory = db.Category.findAll({
        include: [{ association: "productosC" }],
      });
      Promise.all([pedidoPackage, pedidoCategory])
        .then(function ([packages, categories]) {
          return res.status(200).render("./products/create", {
            packages: packages,
            categories: categories,
            errors: errors.mapped(), // envío los errores como un obj. lit.
            oldData: req.body, // envío los datos anteriores a la vista, para que no tengan que volver a cargar todo
          });
        })
        .catch((err) => res.send(err));
    }
  },

  // Detail - Detalle de un producto a partir de su id
  detail: (req, res) => {
    console.log("entrando al render detail de productsController.js");
    db.Product.findByPk(req.params.id, {
      include: [{ association: "categories" }, { association: "packages" }],
    })
      .then(function (product) {
        console.log(product);

        res.render("./products/detail", { product: product });
      })
      .catch((err) => res.send(err));
  },

  // Edit - Render del formulario de edición de un producto
  edit: (req, res) => {
    console.log("Entró al método edit del productController.js");
    //hay que pedir, los datos del producto a editar, pero también los packages y categorias.
    //Por lo que hay vs pedidos asincrónicos. Los defino por separado:
    let pedidoProducto = db.Product.findByPk(req.params.id, {
      include: [{ association: "categories" }, { association: "packages" }],
    });
    let pedidoPackage = db.Package.findAll({
      include: [{ association: "productosP" }],
    });
    let pedidoCategory = db.Category.findAll({
      include: [{ association: "productosC" }],
    });
    Promise.all([pedidoProducto, pedidoPackage, pedidoCategory])
      //cuando obtenga todos los pedidos, recién ahí realiza el "then"
      .then(function ([product, package, category]) {
        return res.status(200).render("./products/edit", {
          product: product,
          package: package,
          category: category,
        });
      })
      .catch((err) => res.send(err));
  },

  //Update -  Método que persiste la data del formulario de edición de un producto
  update: (req, res) => {
    let errors = validationResult(req);
    //res.send(errors);
    if (errors.isEmpty()) {
      //hay errores en la validación??
      //console.log(req.file);
      console.log("Entró al método update del productController.js");
      req.body.image = "/images/products/" + req.file.filename;
      db.Product.update(
        {
          //1ro nombre de las columnas BBDD, igual que en el modelo. 2do nombre del campo del formulario
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          //discount: req.body.discount - Falta agregarlo en la vista
          package_id: req.body.package,
          category_id: req.body.category,
          image: req.body.image,
          //stock: req.body.stock - Falta agregarlo en la vista
        },
        {
          where: { id: req.params.id },
        }
      );
      res.redirect("/");
    } else {
      let pedidoProducto = db.Product.findByPk(req.params.id, {
        include: [{ association: "categories" }, { association: "packages" }],
      });
      let pedidoPackage = db.Package.findAll({
        include: [{ association: "productosP" }],
      });
      let pedidoCategory = db.Category.findAll({
        include: [{ association: "productosC" }],
      });
      Promise.all([pedidoProducto, pedidoPackage, pedidoCategory])
        //cuando obtenga todos los pedidos, recién ahí realiza el "then"
        .then(function ([product, package, category]) {
          return res.status(200).render("./products/edit", {
            product: product,
            package: package,
            category: category,
            errors: errors.mapped(),
          });
        })
        .catch((err) => res.send(err));
    }
  },

  // destroy - Hard Delete - Elimina un producto de la base de datos
  destroy: (req, res) => {
    console.log("Entró al método destroy del productController.js");
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  },

  // Soft Delete - Cambia el status de un producto para que sea o no visible
  delete: (req, res) => {
    db.Product.update(
      {
        status: 0,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/");
  },

  cart: (req, res) => {
    console.log("entrando al render cart");
    db.Product.findAll({}).then(console.log);
    res.status(200).render("./products/cart");
  },
  addProductCart: (req, res) => {
    db.Product.findOne({
      where: { id: req.params.id },
      include: [{ association: "categories" }, { association: "packages" }],
      raw: true, //sigo sin saber bien que hace, pero es necesario para que funcione...
      /* The "Converting circular structure to JSON" error occurs when we pass an object that contains circular 
      references to the JSON.stringify() method. To solve the error, make sure to remove any circular references
       before converting the object to JSON. */
    }).then((productdb) => {
      //console.log(productdb);
      /*como en la base de datos no posee cantidad los objetos se inserta una cantidad*/
      let cantidad = parseInt(req.body.cantidad);

      /*corrobora si existe el item en el carrito*/
      /* El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función 
      de prueba proporcionada. En caso contrario devuelve -1. */
      const indexItem = req.session.cart.findIndex(
        (item) => item.id == productdb.id
      );
      /*si lo encuentra, en el if le suma 1 a la cantidad y si no esta lo agrega */
      if (indexItem != -1) {
        req.session.cart[indexItem].cantidad =
          req.session.cart[indexItem].cantidad + cantidad;
      } else {
        /* Este operador permite que los elementos de un array se expandan y, de esta manera, podemos añadir
         un array dentro de otro sin que el resultado sean arrays anidados, si no un único array al que se han
         añadido nuevos valores. */
        req.session.cart.push({ ...productdb, cantidad });
      }
      console.log(cantidad);
      res.redirect("/products/cart");
    });
  },
  saveProductCart: (req, res) => {
    console.log("entrando al método save del carrito");
    let productosCarritos = req.session.cart;
    console.log(productosCarritos);

    comprador_id = req.session.userLogged.id;
  },
  deleteProductCart: (req, res) => {
    db.Product.findOne({
      where: { id: req.params.id },
    }).then((product) => {
      const indexItem = req.session.cart.findIndex(
        (item) => item.id == product.id
      );
      if (indexItem != -1) {
        /*el método splice(), sirve para eliminar de un array. Desde el índice del primer parámetro (incluido), y 
        la cantidad de elementos indicados en el 2do parámetro */
        req.session.cart.splice(indexItem, 1);
      }

      res.redirect("/products/cart");
    });
  },
  editProductCart: (req, res) => {
    const carrito = req.session.cart;

    const productIndex = carrito.findIndex((item) => item.id == req.params.id);
    console.log(req.body.cantidad);
    carrito[productIndex].cantidad = req.body.cantidad;

    res.redirect("/products/cart");
  },
};

// ************ exports  ************
module.exports = productsController;
