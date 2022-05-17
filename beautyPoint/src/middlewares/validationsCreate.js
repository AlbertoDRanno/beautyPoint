// ************ Validaciones para el Formulario de Creación de Producto - Middleware a nivel ruta ************
//Validaciones previas al controlador
const { body } = require("express-validator"); // body() === check()
// Mediante la destructuración de objetos, no traemos toda la librería, sino solamente la función body

const validateCreateForm = [
  body("name")
    .notEmpty()
    .withMessage("Debes completar el campo Nombre del producto")
    .bail() // si no se corta la validación el usuario recibirá todos los errores juntos
    .isLength({ min: 5, max: 50 })
    .withMessage("El nombre debe tener entre 5 y 50 caracteres"),
  body("price").notEmpty().withMessage("Debes completar el campo Precio"),
  body("description")
    .notEmpty()
    .withMessage("Debes completar el campo Descripción"),
  body("package").notEmpty().withMessage("Debes completar el campo Package"),
  //body("category").notEmpty().withMessage("Debes completar este campo"),
  //body("image").notEmpty().withMessage("Debes completar este campo"),
];

module.exports = validateCreateForm;
