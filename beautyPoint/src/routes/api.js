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

/*** API PRUEBAS PROODUCTOS ***/
router.post("/productsStore", apiController.store);
router.patch("/productsUpdate/:id", apiController.update);
router.delete("/productsDelete/:id", apiController.delete);

router.get("/productsSearch", apiController.search);

router.get("/productsConsumirAPI", apiController.consumirAPI);
router.get("/productsConsumirDosAPIs", apiController.consumirDosAPIs);

router.get("/historialCompras", apiController.historialCompras);

module.exports = router;
