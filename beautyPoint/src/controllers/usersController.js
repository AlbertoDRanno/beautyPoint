const JsonModel = require("../models/jsonModel");
const usersModel = new JsonModel("users");
const { validationResult } = require("express-validator");

const usersController = {
  register: (req, res) => {
    console.log("entrando al método register del userController.js");
    return res.status(200).render("users/register");
  },
  processRegister: (req, res) => {
    //res.send({ body: req.body, file: req.file });
    let errors = validationResult(req);
    //res.send(errors);
    if (errors.isEmpty()) {
      //hay errores en la validación??
      console.log("Entró al método processRegister del usersController.js");
      console.log(req.file);
      req.body.image = "/images/avatars/" + req.file.filename;
      let userId = usersModel.save(req.body);
      res.redirect("/users/profile/" + userId);
    } else {
      res.render("./users/register", {
        errors: errors.array(), // envío los errores en un array, sino se crean conflictos
        old: req.body, // envío los datos anteriores a la vista, para que no tengan que volver a cargar todo
      });
    }
  },
  login: (req, res) => {
    return res.status(200).render("users/login");
  },
  profile: (req, res) => {
    return res.status(200).render("users/profile");
  },
};

module.exports = usersController;
