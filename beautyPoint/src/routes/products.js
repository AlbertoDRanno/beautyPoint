const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get("/detail/:id", productsController.productDetail);

router.get("/cart", productsController.cart);

router.get("/create", productsController.create);
//router.post("/create", productsController.store);

router.get("/edit/:id", productsController.edit);

module.exports = router;
