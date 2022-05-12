const JsonModel = require("../models/jsonModel");
const productsModel = new JsonModel("products");
const { validationResult } = require("express-validator");

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
      console.log("Entró al método store del productController.js");
      console.log(req.file);
      req.body.image = "/images/products/" + req.file.filename;
      let productId = productsModel.save(req.body);
      res.redirect("/products/detail/" + productId);
    } else {
      res.render("./products/create");
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
  // Update - Method to update
  update: (req, res) => {
    console.log("Entró al método update del productController.js");
    req.body.id = req.params.id;
    req.body.image = "/images/products/" + req.file.filename;
    // console.log(req.body);
    productsModel.update(req.body);
    res.redirect("/");
  },
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
};

// ************ exports - (no tocar) ************
module.exports = productsController;
