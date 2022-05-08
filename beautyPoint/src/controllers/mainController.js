const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  index: (req, res) => {
    console.log("entrando al render de index");
    let cuidadosBasicos = products.filter((product) => product.category == "Cuidados Básicos");
    let antiage = products.filter((product) => product.category == "Antiage");
    res.status(200).render("index", { cuidadosBasicos, antiage, toThousand });
  }}
      
module.exports = mainController;
