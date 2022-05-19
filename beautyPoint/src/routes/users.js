const express = require("express");
const router = express.Router();

//validaciones
const registerValidations = require("../middlewares/validationsRegister");
const loginValidations = require("../middlewares/validationsLogin")

//carga de archivos
const uploadFile = require("../middlewares/multerUsers")

//controlador
const usersController = require("../controllers/usersController.js");

// ************ methods() ************

// Formulario de registro
router.get("/register", usersController.register);

// Procesar el registro
router.post(
  "/register",
  uploadFile.single("image"),
  registerValidations,
  usersController.processRegister
);

// Formulario de login
router.get("/login", usersController.login);

// Procesar el login
router.post("/login", usersController.processLogin); //, loginValidations

// Perfil de usuario
router.get("/profile/:userdId", usersController.profile);

module.exports = router;
