// ************ Necesario para el Logout - Middleware a nivel app  ************

function userLoggedMiddleware(req, res, next) {
  //si tengo a alguien en session muestro una parte de la barra de navegación
  //let isLogged = false; // invento esta variable para determinar cuando muestro y cuando no
  res.locals.isLogged = false;
  //IMP! la paso a variable local, para que se puedan compartir entre las vistas, indistintamente del controlador
  //Por lo que en el header, puedo hacer un condicional sobre lo que muestro, basado en este booleano
  if (req.session && req.session.userLogged) {
    // la session se crea una vez que entro al Login, por lo que además tengo que preguntar si hay alguien logueado
    res.locals.isLogged = true;
    //Por lo que si tengo a alguien logueado se mostrará Mi cuenta y Logout, caso contrario, login y register
    res.locals.userLogged = req.session.userLogged;
    //Arriba estoy pasando lo que tengo en session a las variables locales (de nuevo, para tenerlas disponible en todas las vistas)
  }
  next();
}

module.exports = userLoggedMiddleware;
