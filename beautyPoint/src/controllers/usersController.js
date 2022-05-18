const JsonModel = require("../models/jsonModel");
const usersModel = new JsonModel("users");
const { validationResult } = require("express-validator");
const req = require("express/lib/request");
const res = require("express/lib/response");
const bcryptjs = require("bcryptjs");

const usersController = {
  register: (req, res) => {
    console.log("entrando al método register del userController.js");
    return res.status(200).render("users/register");
  },
  processRegister: (req, res) => {
    //res.send({ body: req.body, file: req.file });
    const resultValidation = validationResult(req);
    //res.send(resultValidation);
    //res.send(resultValidation.mapped());
    //res.send(resultValidation.errors.length > 0)
    //Antes de hacer la creación, verificar que el usuario no haya sido cargado previamente:
    let userInDB = usersModel.filtrarPorCampoValor("email", req.body.email);
    console.log(userInDB);
    if (userInDB.length >= 1) {
       res.render("users/register", {
        errors: { email: { msg: "Mensaje" } },
        oldData: req.body,
      });
    } else if (resultValidation.isEmpty()) {
      console.log("Entró al método processRegister del usersController.js");
      console.log(req.file);

      //Ahora piso las propiedades password e image:
      (req.body.password = bcryptjs.hashSync(req.body.password, 10)), // encripto password con la librería bcryptjs
        (req.body.image = "/images/avatars/" + req.file.filename);

      let userId = usersModel.save(req.body);
      res.redirect("/users/profile/" + userId);
    } else {
      //resultValidation es un objeto lit. con la prop. errors, hay elementos en errors?
      res.render("users/register", {
        errors: resultValidation.mapped(), // envío los errores como un obj. lit. para que sea + facil trabajarlo
        oldData: req.body, // envío los datos anteriores a la vista, para que no tengan que volver a cargar todo
      });
    }
    //return res.send("Ok, las validaciones se pasaron, no hay errores");
  },
  login: (req, res) => {
    return res.status(200).render("users/login");
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let users = usersModel.readJsonFile(); // traigo base de usuarios
      let usuarioALoguearse;
      for (let i = 0; i < users.length; i++) {
        // recorro base de usuarios
        if (users[i].email == req.body.email) {
          // Si el mail que viene en el body del form coincide con el de algún usuario
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            // compara la contraseña encriptada que viene en el body, con la almacenada para ese usuario
            let usuarioALoguearse = users[i]; // si se dan ambos casos, es un usuario a loguearse
            break;
          }
        }
      }
      if (usuarioALoguearse == undefined) {
        // no lo encontré en la base de usuarios, devuelvo la vista login, con el array de errores (objetos con la prop. "msg")
        return res.render("users/login", {
          errors: [
            {
              msg: "Credenciales inválidas",
            },
          ],
        });
      }
      req.session.usuarioLogueado = usuarioALoguearse; // si cumple con todas las condiciones, lo guardo en session, es decir, finalmente será un usuarioLogueado
      console.log(req.session.usuarioLogueado);
      res.send("success");
    } else {
      res.render("users/login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }
  },
  profile: (req, res) => {
    return res.status(200).render("users/profile");
  },
};

module.exports = usersController;
