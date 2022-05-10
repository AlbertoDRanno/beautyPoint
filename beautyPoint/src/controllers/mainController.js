const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  index: (req, res) => {
    console.log("entrando al render de index");
    let cuidadosBasicos = products.filter(
      (product) => product.category == "Cuidados Básicos"
    );
    let antiage = products.filter((product) => product.category == "Antiage");
let solares = products.filter((product) => product.category == "Solares");
let maquillajes = products.filter(
  (product) => product.category == "Maquillajes"
);
    res.status(200).render("index", { cuidadosBasicos, antiage, solares, maquillajes, toThousand });
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.keywords.toLowerCase();
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
