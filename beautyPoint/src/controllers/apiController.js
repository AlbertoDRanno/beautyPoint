const db = require('../database/models');
const { Sequelize } = require('sequelize');

const apiController = {
  /* ************************************* USUARIOS */
  listarUsuarios: (req, res) => {
    // /api/users/
    console.log('entrando al método listarUsuarios del apiController.js');

    db.User.findAll({
      attributes: [
        'id',
        [
          Sequelize.fn(
            'CONCAT',
            Sequelize.col('last_name'),
            ' , ',
            Sequelize.col('first_name')
          ),
          'name',
        ],
        'email',
        [
          Sequelize.fn('CONCAT', '/api/users/', Sequelize.col('User.id')),
          'detail',
        ],
      ],
    })
      .then((users) => {
        console.log(users);
        res.status(200).json({
          count: users.length,
          data: users,
          status: 200,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  mostrarDetalleDeUsuario: (req, res) => {
    // /api/users/:id
    console.log(
      'entrando al método mostrarDetalleDeUsuario del apiController.js'
    );
    db.User.findByPk(req.params.id, {
      attributes: [
        'id',
        [
          Sequelize.fn(
            'CONCAT',
            Sequelize.col('last_name'),
            ' , ',
            Sequelize.col('first_name')
          ),
          'name',
        ],
        'dni',
        'email',
        'avatar',
      ],
    })
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
    console.log('entrando al método listarProductos del apiController.js');

    let promesaCategorias = db.Category.findAll({
      include: [{ association: 'productosC', attributes: [] }],
      attributes: [
        'description',
        [
          Sequelize.fn('COUNT', Sequelize.col('category.id')),
          'totalDeProductos',
        ],
      ],
      group: 'category.id',
    });

    let promesaProductos = db.Product.findAll({
      include: [
        { association: 'categories', attributes: ['id', 'description'] },
      ],
      attributes: [
        'id',
        'name',
        'description',
        [
          Sequelize.fn('CONCAT', '/api/products/', Sequelize.col('product.id')),
          'detail',
        ],
      ],
    });

    Promise.all([promesaCategorias, promesaProductos])
      .then(function ([categorias, productos]) {
        res.status(200).json({
          count: productos.length,
          countByCategory: categorias,
          data: productos,
          status: 200,
        });
      })
      .catch((err) => {
        res.send(err);
      });

    // Versión tranqui... sin la magia para resolver el countByCategory
    // db.Product.findAll({
    //   include: [
    //     { association: 'categories', attributes: ['id', 'description'] },
    //   ],
    //   attributes: [
    //     'id',
    //     'name',
    //     'description',
    //     [
    //       Sequelize.fn('CONCAT', '/api/products/', Sequelize.col('product.id')),
    //       'detail',
    //     ],
    //   ],
    // })
    //   .then((productos) => {
    //     res.status(200).json({
    //       count: productos.length,
    //       // countByCategory: ,
    //       data: productos,
    //       status: 200,
    //     });
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });
  },
  mostrarDetalleDeProducto: (req, res) => {
    // /api/products/:id
    console.log(
      'entrando al método mostrarDetalleDeProducto del apiController.js'
    );
    db.Product.findByPk(req.params.id, {
      include: [
        { association: 'categories', attributes: ['description'] },
        { association: 'packages', attributes: ['description'] },
      ],
      attributes: [
        'id',
        'name',
        'price',
        'description',
        'discount',
        'image',
        'stock',
      ],
    })
      .then((producto) => {
        res.status(200).json({ data: producto, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
  },
};

module.exports = apiController;
