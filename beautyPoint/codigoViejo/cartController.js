const path = require("path")
const {
  validationResult
} = require("express-validator")

const {
  Cart,
  Dish,
  Item,
  User
} = require("../database/models")
// const {
//   where
// } = require("sequelize/types")

module.exports = {

  addCart: (req, res) => {
    // Find Product in DB
    // let product = ???
    // Check product exist in cart
    // Case 1: Exist and update quantity
    // Case 2: Add cart and set quantity
    return res.send("Add a new product")
  },
  addCart: (req, res) => {
    const errores = validationResult(req)
    if (errores.isEmpty()) {
      //Debemos buscar el producto por el id
      Dish.findByPk(req.body.productId, {
        include: ["category"]
      }).then((productos)) => {
        //return res.send(typeof productos.discount)
        let price = productos.discount > 0 ?
          Number(productos.price) * ((100 - productos.discount) / 100) : Number(productos.price)
        //console.log( price +"=============================")
        //Crear mi items
        return Item.create({
          salePrice: price,
          quantity: req.body.cantidad,
          subtotal: req.body.cantidad * price,
          state: 1,
          userId: req.session.usuario.id,
          productId: productos.id,
          cartId: null
        }).then(iten => res.redirect("/productos")).catch(error => console.log(error))
      }
    } else {
      Dish.findByPk(req.body.productId, {
        incluse: ["category"]
      }).then(platoComida => {
        res.render(path.resolve(__dirname, "..", "views", "productos", "detail"), {
          platoComida
        })
      })
    }
  },
  cart: (req, res) => {
    Item.findAll({
      where: {
        state: 1,
        userId: req.session.usuario.id
      },
      include: {
        all: true,
        nested: true
      }
    }).then((items) => {
      let total = items.reduce((total, item) => (total = total + Number(item.subtotal)), 0)

      res.render(path.resolve(__dirname, "..", "views", "carrito", "carrito"), {
        cartProducto
      })
    })
  },
  deleteCart: (req, res) => {
    Item.destroy({
      where: {
        productId: req.body.itemId,
        userId: req.session.usuario.id
      }
    }).then(() => res.redirect("/carrito")).catch(error => console.log(error))
  },
  shop: (req, res) => {
    /* Efectuar la compra:
    Formulario - Método Post - Carrito y allí le indico comprar - lo llevo a la ruta
    Buscamos los Items de ese usuario y además que el estado sea pendiente de compra,
    en nuestro caso: estado = 1 */
    let totalPrecio = 0
    Item.findAll({
      where: {
        userId: req.session.usuario.id,
        state: 1
      }
    }).then((items) => {
      /* Debo generar el total de la compra de ese usuario logueado, para eso declaro la variable totalPrecio */
      let totalPrecio = items.reduce((total, item) => (total = total + Number(item.subtotal)), 0)
    })
    /* Debo generar la orden de pago - Busco por fecha de creaciòn de forma DESC y de ese resultado
    tomo la última orden de compra y le sumo 1 - Si no existe una orden de compra previamente entonces
    allí decido por que número iniciar */
    Cart.findOne({
        order: [
          ["createAt", "DESC"]
        ]
      }).then((cart) => {
        return Cart.create({
          orderNumber: cart ? cart.orderNumber + 1 : 1,
          total: totalPrecio,
          userId: req.session.usuario.id
        })
      })
      /* Crear el nuevo carrito (id - usuarioId - total - ordenCompra)
       Le asigno a los items comprados por ese usuario el id del carrito generado y cambio el estado del
       producto en la tabla de detalle (items) por estado 0 = Comprado */
      .then(cart => {
        Item.update({
          state: 0,
          cartId: cart.id
        }, {
          where: {
            userId: req.session.usuario.id,
            state: 1
          }
        })
      })
      .then(() => res.redirect("/carrito/historialCompra"))
      .catch(error => console.log(error))
  }
}