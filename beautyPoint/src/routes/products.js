const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get("/productDetail/id", productsController.productDetail); 

router.get("/productCart", productsController.productCart);

router.post("/productCreate", productsController.productsCreate);

module.exports = router;

