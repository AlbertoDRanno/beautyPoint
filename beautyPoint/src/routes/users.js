const express = require("express");
const router = express.Router();

//registro de creaciones
const logDBMiddleware = require("../middlewares/logDBMiddleware");

//validaciones
const registerValidations = require("../middlewares/validationsRegister");
const loginValidations = require("../middlewares/validationsLogin")

//carga de archivos
const uploadFile = require("../middlewares/multerUsers")

//controlador
const usersController = require("../controllers/usersController.js");

// ************ methods() ************

// Envía el formulario de registro
router.get("/register", usersController.register);

// Procesa el registro
router.post(
  "/register",
  uploadFile.single("image"), logDBMiddleware,
  registerValidations,
  usersController.processRegister
);

// Envía el formulario de login
router.get("/login", usersController.login);

// Procesa el login
router.post("/login", usersController.processLogin); //, loginValidations

// Perfil de usuario
router.get("/profile/:id", usersController.profile);

module.exports = router;
