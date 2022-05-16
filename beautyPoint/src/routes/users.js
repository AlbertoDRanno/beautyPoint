const express = require("express");
const router = express.Router();
const path = require("path");
const { body } = require("express-validator"); // body() === check()

const validations = [
  body("first_name").notEmpty().withMessage("Tienes que escribir tu nombre"),
  body("last_name").notEmpty().withMessage("Tienes que escribir tu apellido"),
  body("dni")
    .notEmpty()
    .withMessage("Tienes que escribir tu DNI")
    .bail()
    .isNumeric()
    .withMessage("Completar solamente con números"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir tu correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("phone")
    .notEmpty()
    .withMessage("Tienes que escribir tu número de celular")
    .bail()
    .isNumeric()
    .withMessage("Completar solamente con números"),
  body("genero").notEmpty(),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          "Las extensiones de archivos permitidas son " +
            acceptedExtensions.join(", ")
        );
      }
    }
    return true;
  }),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .bail() // si no se corta la validación el usuario recibirá todos los errores juntos
    .isLength({ min: 5, max: 15 })
    .withMessage("La contraseña debe tener entre 5 y 15 caracteres"),
  body("repeatPassword")
    .notEmpty()
    .withMessage("Tienes que repetir la contraseña elegida")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      } 
      return true;
    }),
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
