const productsController = {
  productDetail: (req, res) => {
    res.status(200).render("products/productDetail");
  },
  productCart: (req, res) => {
    res.status(200).render("products/productCart");
  },
  productsCreate: (req, res) => {
    res.status(200).render("");
  },
  productList: (req, res) => {
    res.status(200).render("");
  },
};
module.exports = productsController;
