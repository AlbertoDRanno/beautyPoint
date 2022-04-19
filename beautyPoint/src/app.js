const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../src/views/index.html"));
});
app.get("/productDetail", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../src/views/productDetail.html"));
});
app.get("/productCart", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../src/views/productCart.html"));
});
app.get("/login", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../src/views/login.html"));
});
app.get("/register", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../src/views/register.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
