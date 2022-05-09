// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController.js');

// ************ WRITE YOUR CODE FROM HERE ************
// ************ methods() ************

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/create', productsController.store);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productsController.destroy);

/*** GET PRODUCTS FROM CART ***/
router.get('/cart', productsController.cart);

// ************ exports - (no tocar) ************
module.exports = router;
