// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path");

// ************ Multer ************
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, "../../public/images/products");
    cb(null, folder); 
  }, 
  filename: function (req, file, cb) {
    console.log(file); 
    let imageName = "product-" + Date.now() + path.extname(file.originalname); 
    cb(null, imageName); 
  },
});
const uploadFile = multer({ storage });

// ************ Controller Require ************
const productsController = require('../controllers/productsController.js');

// ************ methods() ************

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/create', uploadFile.single("image"), productsController.store);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', uploadFile.single("image"), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productsController.destroy);

/*** GET PRODUCTS FROM CART ***/
router.get('/cart', productsController.cart);

// ************ exports - (no tocar) ************
module.exports = router;
