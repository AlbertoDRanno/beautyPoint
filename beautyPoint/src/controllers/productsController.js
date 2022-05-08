const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
  detail: (req, res) => {
    console.log("entrando al render detail");
    let filteredProduct = products.filter(
      (product) => product.id == req.params.id
    );
    console.log(filteredProduct);

    res.status(200).render("./products/detail", {
      theFiltered: filteredProduct[0],
      toThousand,
    });
  },
  cart: (req, res) => {
    console.log("entrando al render cart");
    res.status(200).render("./products/cart");
  },
  create: (req, res) => {
    console.log("entrando al render de product create");
    res.status(200).render("./products/create");
  },
  edit: (req, res) => {
    console.log("entrando al render de product edit");
    res.status(200).render("./products/edit");
  },
  // productList: (req, res) => {
  //   console.log('entrando al render de productList');
  //   res.status(200).render('');
  // },
};
module.exports = productsController;
