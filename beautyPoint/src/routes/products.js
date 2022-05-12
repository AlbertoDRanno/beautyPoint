// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
const logDBMiddleware = require("../middlewares/logDBMiddleware");
const { body } = require("express-validator"); // Mediante la destructuración de objetos, no traemos toda la librería, sino solamente la función body
// BODY O CHECK???
//Validaciones previas al controlador - Middleware a nivel ruta
const validateCreateForm = [
  body("name")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .bail() // si no se corta la validación el usuario recibirá todos los errores juntos
    .isLength({ min: 5, max: 50 })
    .withMessage("El nombre debe tener entre 5 y 50 caracteres"),
  body("price")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .bail()
    .isInt() //Nro. entero
    .withMessage("El precio debe ser un valor entero"),
  body("description").notEmpty().withMessage("Debes completar este campo"),
  body("package").notEmpty().withMessage("Debes completar este campo"),
  body("category").notEmpty().withMessage("Debes completar este campo"),
  //body("image").notEmpty().withMessage("Debes completar este campo"),
];

// ************ Multer - Middleware a nivel ruta ************
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
const productsController = require("../controllers/productsController.js");

// ************ methods() ************

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post(
  "/create",
  uploadFile.single("image"),
  logDBMiddleware,
  validateCreateForm,
  productsController.store
);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", uploadFile.single("image"), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

/*** GET PRODUCTS FROM CART ***/
router.get("/cart", productsController.cart);

// ************ exports - (no tocar) ************
module.exports = router;
