// ************ Require's ************
const express = require('express');
const router = express.Router();

//controlador
const apiController = require('../controllers/apiController.js');

// ************ methods() ************

/*** API PARA USUARIOS ***/
router.get('/users', apiController.listarUsuarios);
router.get('/users/:id', apiController.mostrarDetalleDeUsuario);

/*** API PARA PROODUCTOS ***/
router.get('/products', apiController.listarProductos);
router.get('/products/:id', apiController.mostrarDetalleDeProducto);

module.exports = router;
