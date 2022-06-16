index: (req, res) => {
    console.log("entrando al render de index");
    let products = productsModel.readJsonFile();
    //console.log(products)
    let cuidadosBasicos = products.filter(
      (product) => product.category == "categoria-1"
    );
    let antiage = products.filter(
      (product) => product.category == "categoria-2"
    );
    let solares = products.filter(
      (product) => product.category == "categoria-3"
    );
    let maquillajes = products.filter(
      (product) => product.category == "categoria-4"
    );
    res
      .status(200)
      .render("index", {
        cuidadosBasicos,
        antiage,
        solares,
        maquillajes,
        toThousand,
      });
  }
