window.addEventListener("load", function () {
  let form = document.querySelector("form.form-login"); //"la etiqueta form, con clase form-login"
  //console.log(form);
  form.addEventListener("submit", function (e) {
    let errores = 0;

    let email = document.querySelector("input.email");
    let h2email = document.querySelector("h2.email");
    let password = document.querySelector("input.password");
    let h2password = document.querySelector("h2.password");
    //expresión regular recomendada para validacion de email básico??
    function validarEmail(valor) {
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        valor
      );
    }

    if (email.value == "") {
      errores++;
      email.classList.add("is-invalid");
      h2email.innerHTML = "Tienes que escribir tu correo electrónico";
    } /* else if (!validarEmail(email.value)) {
      errores++;
      email.classList.add("is-invalid");
      h2email.innerHTML = "Debes escribir un formato de correo válido";
    } */ else {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      email.classList.add("success");
      h2email.innerHTML = "Bien hecho!";
    }

    if (password.value == "") {
      errores++;
      password.classList.add("is-invalid");
      h2password.innerHTML = "Tienes que escribir una contraseña";
    } else if (!(password.value.length >= 8 && password.value.length <= 15)) {
      errores++;
      password.classList.add("is-invalid");
      h2password.innerHTML = "La contraseña debe tener entre 8 y 15 caracteres";
    } else {
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
      password.classList.add("success");
      h2password.innerHTML = "Bien hecho!";
    }

    if (errores > 0) {
      e.preventDefault();
      // let ulErrores = document.querySelector("div.errores ul");
      // for (let i = 0; i < errores.length; i++) {
      //   ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      // }
    }
  });
})