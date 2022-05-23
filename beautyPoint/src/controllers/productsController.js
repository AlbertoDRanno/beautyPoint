const JsonModel = require('../models/jsonModel');
const productsModel = new JsonModel('products');
const { validationResult } = require('express-validator');

const productsController = {
  // Detail - Detalle de un producto a partir de su id
  detail: (req, res) => {
    console.log("entrando al render detail de productsController.js");
    let product = productsModel.buscar(req.params.id);

    if (product) {
      res.render("./products/detail", { products: product });
    } else {
      res.render("./not-found");
    }
  },
  // Create - Render del formulario de creación de un producto
  create: (req, res) => {
    console.log("entrando al método create del productController.js");
    res.status(200).render("./products/create");
  },
  // Create -  Método que persiste la data del formulario de creación de un producto
  store: (req, res) => {
    let errors = validationResult(req);
    //res.send(errors);
    if (errors.isEmpty()) {
      //hay errores en la validación??
      console.log("Entró al método store del productController.js");
      console.log(req.file);
      req.body.image = "/images/products/" + req.file.filename;
      let productId = productsModel.save(req.body);
      res.redirect("/products/detail/" + productId);
    } else {
      res.render("./products/create", {
        errors: errors.mapped(), // envío los errores como un obj. lit. para que sea + facil trabajarlo
        oldData: req.body, // envío los datos anteriores a la vista, para que no tengan que volver a cargar todo
      });
    }
  },

  // Edit - Render del formulario de edición de un producto
  edit: (req, res) => {
    console.log("Entró al método edit del productController.js");
    let product = productsModel.buscar(req.params.id);
    if (product) {
      res.render("./products/edit", { products: product });
      console.log(product);
    } else {
      res.render("./not-found");
    }
  },

  update: (req, res) => {
    console.log("Entró al método update del productController.js");
    let productoAeditar = productsModel.buscar(req.params.id);
    req.body.id = productoAeditar.id;

    if (!req.file) {
      console.log(
        "No se editó la imagen. Traigo la que tenía en base de datos"
      );
      req.body.image = productoAeditar.image;
    } else {
      console.log("Se editó la imagen. Subo la nueva.");
      req.body.image = "/images/products/" + req.file.filename;
    }

    console.log(req.body);

    productsModel.update(req.body);
    res.redirect("/products/detail/" + req.params.id);
  },
  // Update - Method to update
  // update: (req, res) => {
  //   console.log('Entró al método update del productController.js');
  //   req.body.id = req.params.id;
  //   req.body.image = '/images/products/' + req.file.filename;
  //   // console.log(req.body);
  //   productsModel.update(req.body);
  //   res.redirect('/');
  // },

  cart: (req, res) => {
    console.log("entrando al render cart");
    res.status(200).render("./products/cart");
  },
  // Delete - Delete one product from DB
  destroy: (req, res) => {
    console.log("Entró al método destroy del productController.js");

    productsModel.destroy(req.params.id);
    res.redirect("/");
  },
  addProductCart: (req, res) => {
    const product = productsModel.buscar(req.params.id);
    let cantidad = 1;

    const indexItem = req.session.cart.findIndex(
      (item) => item.id == product.id
    );
    if (indexItem != -1) {
      req.session.cart[indexItem].cantidad =
        req.session.cart[indexItem].cantidad + 1;
    } else {
      req.session.cart.push({ ...product, cantidad });
    }
    res.redirect("/products/cart");
  },
  deleteProductCart: (req, res) => {
    const product = productsModel.buscar(req.params.id);

    const indexItem = req.session.cart.findIndex(
      (item) => item.id == product.id
    );
    if (indexItem != -1) {
      req.session.cart.splice(indexItem, 1);
    }

    res.redirect("/products/cart");
  },
};

// ************ exports - (no tocar) ************
module.exports = productsController;
