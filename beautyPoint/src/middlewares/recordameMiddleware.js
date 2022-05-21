const { resetWatchers } = require("nodemon/lib/monitor/watch");
const JsonModel = require("../models/jsonModel");
const usersModel = new JsonModel("users");

function recordameMiddleware(req, res, next) {
  next();

  if (
    req.cookies.recordame != undefined && // si, en las cookies del request hay una que se llame recordame
    req.session.userLogged == undefined // y, si el usuario No está en session
  ) {
    let userToLogin = usersModel.filtrarPorCampoValor(
      // mi usuario a loguear, será el que tenga el mismo mail de la cookie
      "email",
      req.cookies.recordame
    ); 
    resetWatchers.session.userLogged = userToLogin;
  } 
  
}

module.exports = recordameMiddleware;
