// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const logMiddleware = require("./middlewares/logMiddleware");

// ************ express() ************
const app = express();

// ************ Middlewares a Nivel Aplicación (sin importar la ruta a la que ingresen) ************
app.use(express.static("public")); // Configuración de carpeta de archivos estáticos
app.use(express.urlencoded({ extended: false })); // Para capturar datos desde un formulario como un obj literal (req.body)
app.use(express.json()); // Para que en el body puedan viajar datos en formato JSON
app.use(methodOverride("_method")); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(logMiddleware); // Para llevar un registro en text de las URL visitadas - Reemplaza a los console.log???

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
app.use((req, res, next) => {
  res.status(404).render("not-found");
  next();
});

// Server escuchando
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
