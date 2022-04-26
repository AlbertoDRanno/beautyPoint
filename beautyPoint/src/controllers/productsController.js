const path = require("path");

const productsController = {
  productDetail: (req, res) => {
    res
      .status(200)
      .sendFile(
        path.join(__dirname, "../views/products/productDetail.html")
      );
  },
  productCart: (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "../views/products/productCart.html"));
  },
  productsCreate: function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(__dirname, "../src/views/products/productCreate.html")
      );
  },
  productList: function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(__dirname, "../src/views/productos/productsList.html")
      );
  },
};
module.exports = productsController;
