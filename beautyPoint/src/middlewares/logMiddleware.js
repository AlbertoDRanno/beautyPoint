const fs = require("fs");

// Para llevar un registro en text de las URL visitadas - Reemplaza a los console.log???
function logMiddleware(req, res, next) {
  fs.appendFileSync("log.txt", "se ingresó en la página" + req.url);
  next();
}

module.exports = logMiddleware;
