const express = require("express");
const router = express.Router();
const path = require("path");

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
  usersController.processRegister
);

// Formulario de login
router.get("/login", usersController.login);

// Perfil de usuario
router.get("/profile/:userdId", usersController.profile);

module.exports = router;
