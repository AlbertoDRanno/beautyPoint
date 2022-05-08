const productsController = {
  productDetail: (req, res) => {
    console.log("entrando al render productDetail");

    let cuidadosBasicos = [
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
        image: "/images/products/cremaLimpieza.png",
        price: 3500,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 3,
        name: "Dermopulido gel",
        image: "/images/products/dermopulidoGel.png",
        price: 3100,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 4,
        name: "Leche de limpieza",
        image: "/images/products/lecheLimpieza.png",
        price: 2900,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 5,
        name: "Cellular Diamond",
        image: "/images/products/cellularDiamond.png",
        price: 2330,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 6,
        name: "Filler Diamond",
        image: "/images/products/fillerDiamond.png",
        price: 3500,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 7,
        name: "Retinol Plus",
        image: "/images/products/retinolPlus.png",
        price: 3100,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
      {
        id: 8,
        name: "Crema con Oxígeno",
        image: "/images/products/cremaOxigeno.png",
        price: 2900,
        description:
          "Sérum siliconado que retira facilmente maquillaje waterproof. Es totalmente oil free.",
        package: "70 ml",
        class: "Cuidados Básicos",
      },
    ];
    let filteredProduct = cuidadosBasicos.filter(
      (product) => product.id == req.params.id
    );
    console.log(filteredProduct);

    res.status(200).render("./products/detail", {
      theFiltered: filteredProduct[0],
    });
  },
  cart: (req, res) => {
    console.log("entrando al render cart");
    res.status(200).render("./products/cart");
  },
  create: (req, res) => {
    console.log("entrando al render de product create");
    res.status(200).render("./products/create");
  },
  edit: (req, res) => {
    console.log("entrando al render de product edit");
    res.status(200).render("./products/edit");
  },
  // productList: (req, res) => {
  //   console.log('entrando al render de productList');
  //   res.status(200).render('');
  // },
};
module.exports = productsController;
