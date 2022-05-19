// ************ Require's ************
const express = require("express");
//const path = require("path");
const methodOverride = require("method-override"); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
const logMiddleware = require("./middlewares/logMiddleware");
const session = require("express-session");

// ************ express() ************
const app = express();

// ************ Middlewares a Nivel Aplicación (sin importar la ruta a la que ingresen) ************
//la petición tiene que cumplir con estos, antes de que el servidor la derive a la ruta correspondiente
//app.use() hace referencia a que toda la app usará ese middleware
app.use(express.static("public")); // Configuración de carpeta de archivos estáticos
app.use(express.urlencoded({ extended: false })); // Para capturar datos desde un formulario como un obj literal (req.body)
app.use(express.json()); // Para que en el body puedan viajar datos en formato JSON
app.use(methodOverride("_method")); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(logMiddleware); // Para llevar un registro en txt de las URL visitadas - Reemplaza a los console.log
app.use(
  session({
    secret: "texto único aleatorio para identificar nuestro sitio web", //tendría que ir cifrada (googlear)
    resave: false,
    saveUninitialized: false, //https://github.com/expressjs/session#options
  })
); // Para evitar que otras páginas web utilicen la información que guardamos en la PC del usuario

//************ Mantenimiento ************
let enMantenimiento = false; // Pasar a true para poner en modo "Página en Mantenimiento"
if (enMantenimiento == true) {
  app.use((req, res, next) => {
    res.send("Momentáneamente esta página está en Mantenimiento"); // Se podría crear una vista para esto
    next();
  });
}

// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Define la ubicación de la carpeta de las Vistas

// ************ Route System ************
//ruteos
const rutasMain = require("./routes/main.js");
const rutasProducts = require("./routes/products.js");
const rutasUsers = require("./routes/users.js");
const res = require("express/lib/response");
//configuración de ruteo
app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/users", rutasUsers);

// ************ Middleware Error 404 - Siempre último! ************
//Se ejecuta en caso de que una ruta no exista
app.use((req, res, next) => {
  res.status(404).render("not-found");
  next();
});

// Server escuchando
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
