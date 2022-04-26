const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get("/productDetail", productsController.productDetail); 

router.get("/productCart", productsController.productCart);

router.post("/product", productsController.productsCreate);

module.exports = router;

