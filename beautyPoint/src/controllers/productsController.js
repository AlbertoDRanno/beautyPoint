const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    res.status(200).render('./products/create', { products: products });
  },
  // Create -  Método que persiste la data del formulario de creación de un producto
  store: (req, res) => {
    console.log('Entró al método store del productController.js');
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
