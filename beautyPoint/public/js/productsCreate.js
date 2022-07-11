window.addEventListener("load", function () {
  let form = document.querySelector("form.form-register");
  //console.log(form);
  form.addEventListener("submit", function (e) {
    let errores = 0;

    let name = document.querySelector("input.name");
    let h2name = document.querySelector("h2.name");
    let price = document.querySelector("input.price");
    let h2price = document.querySelector("h2.price");
    let description = document.querySelector("textarea.description");
    let h2description = document.querySelector("h2.description");
    let package = document.querySelector("select.package");
    let h2package = document.querySelector("h2.package");
    let category = document.querySelector("select.category");
    let h2category = document.querySelector("h2.category");
    let image = document.querySelector("input.image");
    let h2image = document.querySelector("h2.image");

    function validarImage() {
      // Obtener nombre de archivo
      let archivo = image.value;
      // Obtener extensión del archivo
      let extension = archivo.substring(
        /*substring() devuelve una parte de una cadena definida por los índices pasados ​​como parámetros a esta función.
        Toma dos parámetros, el índice inicial y el índice final*/
        archivo.lastIndexOf("."),
        /*lastIndexOf(), el 1er parámetro, averigua la última posición donde el "." está presente */
        archivo.length //2do parámetro, el índice final.
      );
      // Si la extensión obtenida no está incluida en la lista de valores del atributo "accept", mostraré el error.
      if (
        document
          .querySelector("input.image")
          .getAttribute("accept")
          .split(
            ","
          ) /*String original del accept=".jpg, .png, .jpeg, .gif". El método split() devuelve un array con cada uno de
           los elementos que estaban entre los separadores, en este caso, las comas: [.jpg, .png, .jpeg, .gif].*/
          .indexOf(extension) < 0 //si la extensión no se encuentra en ese array, el indexOf dará "-1"
      ) {
        return true; /* devuelve que es verdad que la extensión no está en el array. Por lo que si la validación es true,
        devuelvo un error*/
      }
    }

    if (name.value == "") {
      errores++;
      name.classList.add("is-invalid");
      h2name.innerHTML = "Debes completar el campo Nombre del producto";
    } else if (!(name.value.length >= 5 && name.value.length <= 50)) {
      errores++;
      name.classList.add("is-invalid");
      h2name.innerHTML = "El nombre debe tener entre 5 y 50 caracteres";
    } else {
      name.classList.add("is-valid");
      name.classList.remove("is-invalid");
      name.classList.add("success");
      h2name.innerHTML = "Bien hecho!";
    }

    if (price.value == "") {
      errores++;
      price.classList.add("is-invalid");
      h2price.innerHTML = "Debes completar el campo Precio";
    } else {
      price.classList.add("is-valid");
      price.classList.remove("is-invalid");
      price.classList.add("success");
      h2price.innerHTML = "Bien hecho!";
    }

    if (description.value == "") {
      errores++;
      description.classList.add("is-invalid");
      h2description.innerHTML = "Debes completar el campo descripción";
    } else if (!(description.length >= 20)) {
      errores++;
      description.classList.add("is-invalid");
      h2description.innerHTML =
        "La descripción debe tener al menos 20 caracteres";
    } else {
      description.classList.add("is-valid");
      description.classList.remove("is-invalid");
      description.classList.add("success");
      h2description.innerHTML = "Bien hecho!";
    }

    if (package.value == "") {
      errores++;
      package.classList.add("is-invalid");
      h2package.innerHTML = "Debes completar el campo Package";
    } else {
      package.classList.add("is-valid");
      package.classList.remove("is-invalid");
      package.classList.add("success");
      h2package.innerHTML = "Bien hecho!";
    }

    if (category.value == "") {
      errores++;
      category.classList.add("is-invalid");
      h2category.innerHTML = "Debes elegir una categoría";
    } else {
      category.classList.add("is-valid");
      category.classList.remove("is-invalid");
      category.classList.add("success");
      h2category.innerHTML = "Bien hecho!";
    }

    if (image.value == "") {
      errores++;
      image.classList.add("is-invalid");
      h2image.innerHTML = "Tienes que subir una imagen para tu producto";
    } else if (validarImage(image.value)) {
      errores++;
      image.classList.add("is-invalid");
      h2image.innerHTML =
        "Archivo inválido. No se permite la extensión " + extension;
    } else {
      image.classList.add("is-valid");
      image.classList.remove("is-invalid");
      image.classList.add("success");
      h2image.innerHTML = "Bien hecho!";
    }

    if (errores > 0) {
      e.preventDefault();
      // let ulErrores = document.querySelector("div.errores ul");
      // for (let i = 0; i < errores.length; i++) {
      //   ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      // }
    }
  });
});
