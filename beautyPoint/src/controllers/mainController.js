const db = require("../database/models");

// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//const fs = require("fs");
//const path = require("path");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const JsonModel = require("../modelos/jsonModel");
const productsModel = new JsonModel("products");

const mainController = {
  index: (req, res) => {
    console.log("entrando al render de index");
    db.Category.findAll({
      include: [
        {
          association: "productosC",
        },
      ],
    }).then(function (categories) {
      res.status(200).render("index", { categories: categories, toThousand });
    });
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.keywords.toLowerCase();
    let products = productsModel.readJsonFile();
    console.log(loQueBuscoElUsuario);
    let productsResults = [];
    for (let i = 0; i < products.length; i++) {
      console.log("entró al FOR");
      if (products[i].name.toLowerCase().includes(loQueBuscoElUsuario)) {
        productsResults.push(products[i]);
      }
    }
    res.status(200).render("results", {
      productsResults,
      toThousand,
    });
  },
};

module.exports = mainController;
