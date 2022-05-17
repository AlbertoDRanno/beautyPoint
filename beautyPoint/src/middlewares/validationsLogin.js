// ************ Validaciones para el Formulario de Login - Middleware a nivel ruta ************
const { body } = require("express-validator"); // body() === check()

const loginValidations = [
  body("email")
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password")
    .isLength({ min: 5, max: 15 })
    .withMessage("La contraseña debe tener entre 5 y 15 caracteres"),
];

module.exports = loginValidations;
