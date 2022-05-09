const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const productsController = {
  // Detail - Detalle de un producto a partir de su id
  detail: (req, res) => {
    console.log('entrando al render detail de productsController.js');
    let filteredProduct = products.filter(
      (product) => product.id == req.params.id
    );
    console.log(filteredProduct);

    res.status(200).render('./products/detail', {
      theFiltered: filteredProduct[0],
      toThousand,
    });
  },
  // Create - Render del formulario de creación de un producto
  create: (req, res) => {
    console.log('entrando al método create del productController.js');
    res.status(200).render('./products/create');
  },
  // Create -  Método que persiste la data del formulario de creación de un producto
  store: (req, res) => {
    console.log('Entró al método store del productController.js');

    // Calculo id del producto a crear (será 1 más que el último en base de datos)
    // Obs: Version tempo hasta implementar base de datos.
    let idCalculadoDelProductoNuevo = products.reduce(
      (idNuevo, producto) =>
        (idNuevo =
          idNuevo > parseInt(producto.id) ? idNuevo : parseInt(producto.id)),
      0
    );
    idCalculadoDelProductoNuevo++;
    console.log('id calculado para nuevo prod: ' + idCalculadoDelProductoNuevo);
    let productoNuevo = {
      id: idCalculadoDelProductoNuevo,
      name: req.body.product_name,
      image: req.body.product_image,
      price: req.body.product_price,
      description: req.body.product_description,
      package: req.body.product_package,
      category: req.body.product_category,
    };

    products.push(productoNuevo);
    // res.send(productoNuevo);
    console.log('Producto creado OK!');
    res.redirect('/');
  },

  // Edit - Render del formulario de edición de un producto
  edit: (req, res) => {
    console.log('Entró al método edit del productController.js');
    res.status(200).render('./products/edit');
    // res.status(200).render('./products/edit', { products: productoEditable[0] });
  },
  // Update - Method to update
  update: (req, res) => {
    console.log('Entró al método update del productController.js');
  },
  cart: (req, res) => {
    console.log('entrando al render cart');
    res.status(200).render('./products/cart');
  },
  // productList: (req, res) => {
  //   console.log('entrando al render de productList');
  //   res.status(200).render('');
  // },
  // Delete - Delete one product from DB
  destroy: (req, res) => {
    console.log('Entró al método destroy del productController.js');
  },
};

// ************ exports - (no tocar) ************
module.exports = productsController;
