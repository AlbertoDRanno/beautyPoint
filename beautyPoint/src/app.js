// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// ************ express() - (no tocar) ************
const app = express();

// ************ Middlewares - (no tocar) ************
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // Para capturar datos desde un formulario como un obj literal
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (no tocar) ************
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Define la ubicación de la carpeta de las Vistas

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
//ruteos
const rutasMain = require('./routes/main.js');
const rutasProducts = require('./routes/products.js');
const rutasUsers = require('./routes/users.js');

app.use('/', rutasMain);
app.use('/products', rutasProducts);
app.use('/users', rutasUsers);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res) => {
  res.status(404).render('not-found'); //error 404
});

// Server escuchando
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
