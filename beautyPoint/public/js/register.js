window.addEventListener("load", function () {
  let form = document.querySelector("form.form-register"); //"la etiqueta form, con clase form-register"
  //console.log(form);
  form.addEventListener("submit", function (e) {
    let errores = 0;

    let first_name = document.querySelector("input.first_name");
    let h2first_name = document.querySelector("h2.first_name");
    let last_name = document.querySelector("input.last_name");
    let h2last_name = document.querySelector("h2.last_name");
    let dni = document.querySelector("input.dni");
    let h2dni = document.querySelector("h2.dni");
    let email = document.querySelector("input.email");
    let h2email = document.querySelector("h2.email");
    let phone = document.querySelector("input.phone");
    let h2phone = document.querySelector("h2.phone");
    let password = document.querySelector("input.password");
    let h2password = document.querySelector("h2.password");
    let repeatPassword = document.querySelector("input.repeatPassword");
    let h2repeatPassword = document.querySelector("h2.repeatPassword");
    //expresión regular recomendada para validacion de email básico??
    function validarEmail(valor) {
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        valor
      );
    }

    if (first_name.value == "") {
      errores++;
      first_name.classList.add("is-invalid");
      h2first_name.innerHTML = "Tienes que escribir tu nombre";
    } else if (first_name.value.length < 2) {
      errores++;
      first_name.classList.add("is-invalid");
      h2first_name.innerHTML = "El nombre debe tener al menos 2 caracteres";
    } else {
      first_name.classList.add("is-valid");
      first_name.classList.remove("is-invalid");
      first_name.classList.add("success");
      h2first_name.innerHTML = "Bien hecho!";
    }

    if (last_name.value == "") {
      errores++;
      last_name.classList.add("is-invalid");
      h2last_name.innerHTML = "Tienes que escribir tu apellido";
    } else if (last_name.value.length < 2) {
      errores++;
      last_name.classList.add("is-invalid");
      h2last_name.innerHTML = "El apellido debe tener al menos 2 caracteres";
    } else {
      last_name.classList.add("is-valid");
      last_name.classList.remove("is-invalid");
      last_name.classList.add("success");
      h2last_name.innerHTML = "Bien hecho!";
    }

    if (dni.value == "") {
      errores++;
      dni.classList.add("is-invalid");
      h2dni.innerHTML = "Tienes que escribir tu DNI - Solo números";
    } else {
      dni.classList.add("is-valid");
      dni.classList.remove("is-invalid");
      dni.classList.add("success");
      h2dni.innerHTML = "Bien hecho!";
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

    if (phone.value == "") {
      errores++;
      phone.classList.add("is-invalid");
      h2phone.innerHTML = "Tienes que escribir tu número de celular";
    } else {
      phone.classList.add("is-valid");
      phone.classList.remove("is-invalid");
      phone.classList.add("success");
      h2phone.innerHTML = "Bien hecho!";
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

    if (repeatPassword.value == "") {
      errores++;
      repeatPassword.classList.add("is-invalid");
      h2repeatPassword.innerHTML = "Tienes que repetir la contraseña elegida";
    } else if (password.value !== repeatPassword.value) {
      errores++;
      repeatPassword.classList.add("is-invalid");
      h2repeatPassword.innerHTML = "Las contraseñas no coinciden";
    } else {
      repeatPassword.classList.add("is-valid");
      repeatPassword.classList.remove("is-invalid");
      repeatPassword.classList.add("success");
      h2repeatPassword.innerHTML = "Bien hecho!";
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
