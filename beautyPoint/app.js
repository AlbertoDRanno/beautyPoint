const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/inicio.html"));
});
app.get("/detalleDeProducto", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "views/detalleDeProducto.html"));
});
app.get("/carritoDeCompras", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/carritoDeCompras.html"));
});
app.get("/login", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/registro", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/registro.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

  