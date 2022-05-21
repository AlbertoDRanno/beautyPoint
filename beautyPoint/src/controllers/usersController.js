const JsonModel = require("../models/jsonModel");
const usersModel = new JsonModel("users");
const { validationResult } = require("express-validator"); // trae el resultados de las validaciones que hicimos
const bcryptjs = require("bcryptjs");

const usersController = {
  register: (req, res) => {
    console.log("entrando al método register del userController.js");
    return res.status(200).render("users/register");
  },
  processRegister: (req, res) => {
    //res.send({ body: req.body, file: req.file });
    const resultValidation = validationResult(req); // esta variable es un objeto con varias propiedades, una de ellas es is Empty
    //res.send(resultValidation);
    //res.send(resultValidation.mapped());
    //res.send(resultValidation.errors.length > 0)
    //Antes de hacer la creación, verificar que el usuario no haya sido cargado previamente:
    let userInDB = usersModel.filtrarPorCampoValor("email", req.body.email);
    console.log(userInDB);
    if (userInDB.length >= 1) {
      res.render("users/register", {
        errors: { email: { msg: "Un usuario ya se registró con este mail" } },
        oldData: req.body,
      });
    } else if (resultValidation.isEmpty()) {
      console.log("Entró al método processRegister del usersController.js");
      console.log(req.file);

      //Ahora piso las propiedades password e image:
      (req.body.password = bcrypt.hashSync(req.body.password, 10)), // encripto password con la librería bcryptjs
        //el ", 10" es la cantidad de "sal", un dato añadido que hace que los hash sean mucho más difíciles de romper. Para contraseñas se suele usar 10 o 12
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
    console.log(req.session); //obj. lit. con la prop. cookie
    return res.status(200).render("users/login");
  },
  processLogin: (req, res) => {
    let usersToLogin = usersModel.filtrarPorCampoValor("email", req.body.email);
    //devuelve el objeto usuario a loguearse, dentro de un array
    let userToLogin = usersToLogin[0];
    //devuelve el objeto usuario en sí

    if (userToLogin) {
      // si el mail existe en mi base de datos, compara las contraseñas
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (isOkThePassword) {
        // si el password tmb está ok, permite el ingreso
        //quiero guardar al usuario en session. Pero no me interesa, y es más seguro, eliminar antes el password.
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        //ahora el obj session, tiene otra propiedad: userLogged (además de cookie), que guarda toda la info de userToLogin
        return res.redirect("/users/profile/" + userToLogin.id);
      }
      return res.render("users/login", {
        // si el password no está ok
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }

    return res.render("users/login", {
      // si el mail no está ok
      errors: {
        email: {
          msg: "No se encuentra este email en nuestra base de datos",
        },
      },
    });
  },
  profile: (req, res) => {
    console.log("Entrando a Profile");
    console.log(req.session);
    res.render("users/profile", {
      user: req.session.userLogged // le comparto la info a la vista
    });
  },
};

module.exports = usersController;
