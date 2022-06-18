const db = require('../database/models');
const Op = db.Sequelize.Op;

const apiController = {
  /* ************************************* USUARIOS */
  listarUsuarios: (req, res) => {
    // api/users/
    // EN PROCESO: falta tuneo de campos a retornar en json según enunciado
    console.log('entrando al método listarUsuarios del apiController.js');

    db.User.findAll()
      .then((users) => {
        res.status(200).json({
          total: users.length,
          data: users,
          status: 200,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  mostrarDetalleDeUsuario: (req, res) => {
    // api/users/:id
    // EN PROCESO: falta tuneo de campos a retornar en json según enunciado
    console.log(
      'entrando al método mostrarDetalleDeUsuario del apiController.js'
    );
    db.User.findByPk(req.params.id)
      .then((usuario) => {
        res.status(200).json({ data: usuario, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  /* ************************************* PRODUCTOS */
  listarProductos: (req, res) => {
    // api/products/
    // EN PROCESO: falta tuneo de campos a retornar en json según enunciado
    console.log('entrando al método listarProductos del apiController.js');
    db.Product.findAll()
      .then((productos) => {
        res.status(200).json({
          count: productos.length,
          // countByCategory: ,
          data: productos,
          status: 200,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  mostrarDetalleDeProducto: (req, res) => {
    // api/products/:id
    // EN PROCESO: falta tuneo de campos a retornar en json según enunciado
    console.log(
      'entrando al método mostrarDetalleDeProducto del apiController.js'
    );
    db.Product.findByPk(req.params.id)
      .then((producto) => {
        res.status(200).json({ data: producto, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
  },
};

module.exports = apiController;
