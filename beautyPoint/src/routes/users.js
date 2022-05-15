const express = require("express");
const router = express.Router();
const path = require("path");
const { body } = require("express-validator"); // body() === check()

const validations = [
  body("first_name").notEmpty().withMessage("Tienes que escribir tu nombre"),
  body("last_name").notEmpty().withMessage("Tienes que escribir tu apellido"),
  body("dni").notEmpty().withMessage("Tienes que escribir tu DNI"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir tu correo electrónico"),
  body("phone")
    .notEmpty()
    .withMessage("Tienes que escribir tu número de celular"),
  //body("genere").notEmpty(),
  body("birthDate")
    .notEmpty()
    .withMessage("Tienes que completar tu fecha de nacimiento"),
  //body("image").notEmpty(),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  body("repeatPassword")
    .notEmpty()
    .withMessage("Tienes que escribir repetir la contraseña")
];

// ************ Multer - Middleware a nivel ruta ************
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, "../../public/images/avatars");
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    console.log(file);
    let imageName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, imageName);
  },
});
const uploadFile = multer({ storage });

const usersController = require("../controllers/usersController.js");

// Formulario de registro
router.get("/register", usersController.register);

// Procesar el registro
router.post(
  "/register",
  uploadFile.single("image"),
  validations,
  usersController.processRegister
);

// Formulario de login
router.get("/login", usersController.login);

// Perfil de usuario
router.get("/profile/:userdId", usersController.profile);

module.exports = router;
