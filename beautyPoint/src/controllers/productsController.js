const productsController = {
  productDetail: (req, res) => {
    console.log("entrando al render de productDetail");
    let products = [
      {
        id: 1,
        name: "Sérum demaquillante de ojos y labios",
        image: "/images/products/serumDemaq.png",
        price: 2330,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 2,
        name: "Crema de limpieza",
        image: "/images/products/serumDemaq.png",
        price: 3500,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 3,
        name: "Dermopulido gel",
        image: "/images/products/serumDemaq.png",
        price: 3100,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 4,
        name: "Leche de limpieza",
        image: "/images/products/serumDemaq.png",
        price: 2900,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 5,
        name: "Sérum demaquillante de ojos y labios",
        image: "/images/products/serumDemaq.png",
        price: 2330,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 6,
        name: "Crema de limpieza",
        image: "/images/products/serumDemaq.png",
        price: 3500,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 7,
        name: "Dermopulido gel",
        image: "/images/products/serumDemaq.png",
        price: 3100,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 8,
        name: "Leche de limpieza",
        image: "/images/products/serumDemaq.png",
        price: 2900,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
    ];
    let filteredProduct = products.filter(
      (filtered) => filtered.id == req.params.id
    );
    res
      .status(200)
      .render("products/productDetail", { theFiltered: filteredProduct[0] });
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
