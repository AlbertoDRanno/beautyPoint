const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/productDetail/:id', productsController.productDetail);

router.get('/productCart', productsController.productCart);

router.get('/create', productsController.create);

router.get('/edit/:id', productsController.edit);

module.exports = router;
