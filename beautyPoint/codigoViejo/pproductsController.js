store: (req, res) => {
    let errors = validationResult(req);
    //res.send(errors);
    if (errors.isEmpty()) {
      //hay errores en la validación??
      console.log("Entró al método store del productController.js");
      console.log(req.file);
      req.body.image = "/images/products/" + req.file.filename;
      let productId = productsModel.save(req.body);
      res.redirect("/products/detail/" + productId);
    } else {
      res.render("./products/create", {
        errors: errors.mapped(), // envío los errores como un obj. lit. para que sea + facil trabajarlo
        oldData: req.body, // envío los datos anteriores a la vista, para que no tengan que volver a cargar todo
      });
    }}

