const db = require("../database/models");
const { Sequelize } = require("sequelize");
const { response } = require("express");
const Op = db.Sequelize.Op;
const fetch = require("node-fetch"); //Permite consumir APIs de 3ros

const apiController = {
  /* ************************************* USUARIOS */
  listarUsuarios: (req, res) => {
    // /api/users/
    console.log("entrando al método listarUsuarios del apiController.js");
    //return res.send("listarUsuarios")
    db.User.findAll({
      attributes: [
        "id",
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("last_name"),
            " , ",
            Sequelize.col("first_name")
          ),
          "name",
        ],
        "email",
        [
          Sequelize.fn("CONCAT", "/api/users/", Sequelize.col("User.id")),
          "detail",
        ],
      ],
    })
      .then((users) => {
        //return res.send(users)
        console.log(users);
        res.status(200).json({
          //envío info en formato JSON
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
      "entrando al método mostrarDetalleDeUsuario del apiController.js"
    );
    db.User.findByPk(req.params.id, {
      attributes: [
        "id",
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("last_name"),
            " , ",
            Sequelize.col("first_name")
          ),
          "name",
        ],
        "dni",
        "email",
        "avatar",
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
    console.log("entrando al método listarProductos del apiController.js");

    let promesaCategorias = db.Category.findAll({
      include: [{ association: "productosC", attributes: [] }],
      attributes: [
        "description",
        [
          Sequelize.fn("COUNT", Sequelize.col("category.id")),
          "totalDeProductos",
        ],
      ],
      group: "category.id",
    });

    let promesaProductos = db.Product.findAll({
      include: [
        { association: "categories", attributes: ["id", "description"] },
      ],
      attributes: [
        "id",
        "name",
        "description",
        [
          Sequelize.fn("CONCAT", "/api/products/", Sequelize.col("product.id")),
          "detail",
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
      "entrando al método mostrarDetalleDeProducto del apiController.js"
    );
    db.Product.findByPk(req.params.id, {
      include: [
        { association: "categories", attributes: ["description"] },
        { association: "packages", attributes: ["description"] },
      ],
      attributes: [
        "id",
        "name",
        "price",
        "description",
        "discount",
        "image",
        "stock",
      ],
    })
      .then((producto) => {
        res.status(200).json({ data: producto, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  //Pruebas
  store: (req, res) => {
    db.Product.create(
      //create(req.body) sería lo genérico y luego detallo en postman cada key/value en el form de la solapa body
      //o también, copio este objeto y lo pego en raw, pero le pongo los valores deseados y las comillas a las propiedades, para que viaje en formato json
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        package_id: req.body.package_id,
        category_id: req.body.category_id,
        image: req.body.image,
        status: 1,
      }
    )
      .then((producto) => {
        let respuesta;
        if (producto) {
          respuesta = {
            meta: {
              status: 200,
              created: "ok",
              total: producto.length,
              url: "/api/productsStore",
            },
            data: producto,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              url: "/api/productsStore",
            },
            data: producto,
          };
        }
        return res.json(respuesta);
      })
      .catch((err) => res.send(err));
  },
  update: (req, res) => {
    db.Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        package_id: req.body.package_id,
        category_id: req.body.category_id,
        image: req.body.image,
        status: 1,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then((producto) => {
        let respuesta;
        if (producto) {
          respuesta = {
            meta: {
              status: 200,
              updated: "ok",
              total: producto.length,
              url: "/api/productsUpdate/:id",
            },
            data: producto,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              url: "/api/productsUpdate/:id",
            },
            data: producto,
          };
        }
        return res.json(respuesta);
      })
      .catch((err) => res.send(err));
  },
  delete: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((producto) => {
        let respuesta;
        if (producto) {
          respuesta = {
            meta: {
              status: 200,
              updated: "ok",
              total: producto.length,
              url: "/api/productsDelete/:id",
            },
            data: producto,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              url: "/api/productsDelete/:id",
            },
            data: producto,
          };
        }
        return res.json(respuesta);
      })
      .catch((err) => res.send(err));
  },
  search: (req, res) => {
    db.Product.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    })
      .then((productos) => {
        if (productos.length > 0) {
          return res.status(200).json(productos);
        }
        return res.status(200).json("No existen productos con ese nombre");
      })
      .catch((err) => res.send(err));
  },
  consumirAPI: async (req, res) => {
    //realizo un pedido asíncrono, y fetch es un método que tiene 2 promesas:
    //la 1era, es la consulta al endpoint - entre los ( ), paso la URL de la API que quiero cosumir
    //fetch("http://www.omdbapi.com/?apikey=d4e35e92&t=Doctor+Strange")
    fetch("https://randomuser.me/api/?results=100") //&gender=female
      //la 2da, es la promesa que devuelve ese endpoint, que aún se tiene que resolver - y pido que la entregue en formato JSON
      .then((response) => response.json())
      //una vez se resuelva esta promesa, voy a obtener la info
      //.then((pelicula) => {
      .then((usuarios) => {
        //a partir de aquí es donde puedo trabajar con lo que me llega de la API
        //return res.json(pelicula); //- si quisiera enviar a un endpoint la info de la API
        //return res.json(usuarios.results); //- si quisiera enviar a un endpoint la info de la API
        //si quiero enviarla a una vista:
        //return res.render("api.ejs", { pelicula: pelicula }); //aagregarle a la vista api.ejs": <h1><%= pelicula.Title %> </h1>
        return res.render("api.ejs", { usuarios: usuarios.results });
      })
      .catch((err) => res.send(err));
  },
  consumirDosAPIs: async (req, res) => {
    /*cuando consumo más de una API, defino las promesas por separado
    En cada caso, le estoy diciendo: de manera asincrónica, quiero que leas estas líneas de código
     y que esperes a que el .then se resuelva, y que guardes, lo que devuelva, en cada variable
    correspondiente*/
    let pelicula = await fetch(
      "http://www.omdbapi.com/?apikey=d4e35e92&t=Doctor+Strange"
    ).then((response) => response.json());
    let provinces = await fetch(
      "https://apis.datos.gob.ar/georef/api/provincias"
    ).then((response) => response.json())
      .catch((err) => res.send(err));

    // return res.json({pelicula, provincias})
    return res.render("apiDos.ejs", {
      pelicula: pelicula,
      provinces: provinces,
    });
  },
};

module.exports = apiController;
