window.addEventListener("load", function () {
  let form = document.querySelector("form.form-register"); //"la etiqueta form, con clase form-register"
  //console.log(form);
  let first_name = document.querySelector("input.first_name");
  let last_name = document.querySelector("input.last_name");
  let dni = document.querySelector("input.dni");

  form.addEventListener("submit", function (e) {
    e.preventDefault;
    checkInputs(); //llamo a un método que valide los inputs

    // let errores = [];

    // if (first_name.value == "") {
    //   errores.push("Tienes que escribir tu nombre");
    //   first_name.classList.add("is-invalid");
    // } else if (first_name.value.length < 2) {
    //   errores.push("El nombre debe tener al menos 2 caracteres");
    //   first_name.classList.add("is-invalid");
    // } else {
    //   first_name.classList.add("is-valid");
    //   first_name.classList.remove("is-invalid");
    // }

    // if (last_name.value == "") {
    //   errores.push("Tienes que escribir tu apellido");
    // } else if (last_name.value.length < 2) {
    //   errores.push("El nombre debe tener al menos 2 caracteres");
    // }

    // if (dni.value == "") {
    //   errores.push("Tienes que escribir tu DNI");
    // }

    // if (errores.length > 0) {
    //   e.preventDefault();

    //   let ulErrores = document.querySelector("div.errores ul")
    //   for (let i = 0; i < errores.length; i++) {

    //     ulErrores.innerHTML += "<li>" + errores[i] + "</li>"

    //   }
    // }
  });
});

function checkInputs() {
  //para eliminar cualquier caracter vacío dentro del texto del input
  const first_nameValue = first_name.value.trim();
  const last_nameValue = last_name.value.trim();
  const dniValue = dni.value.trim();

  //Validaciones:
  if (first_nameValue === "") {
    setErrorFor(first_name, "Tienes que escribir tu NOMBRE" ); //si es vacío, llamo a este método
  } else {
    setSuccessFor(first_name);
  }
  // if (emailValue === "") {
  //   setErrorFor(email, "No puede dejar el email en blanco");
  // } else if (!isEmail(emailValue)) {
  //   setErrorFor(email, "No ingreso un email válido");
  // } else {
  //   setSuccessFor(email);
  // }
   if (last_nameValue === "") {
    setErrorFor(last_name, "Tienes que escribir tu APELLIDO" ); //si es vacío, llamo a este método
  } else {
    setSuccessFor(last_name);
  }
    // if (passwordValue === "") {
    //   setErrorFor(password, "Password no debe ingresar en blanco.");
    // } else {
    //   setSuccessFor(password);
    // }

    // if (password2Value === "") {
    //   setErrorFor(password2, "Password2 no debe ngresar en blanco");
    // } else if (passwordValue !== password2Value) {
    //   setErrorFor(password2, "Passwords no coinciden");
    // } else {
    //   setSuccessFor(password2);
    // }

}
//este método recibirá como parámetros el input y el message
function setErrorFor(input, message) {
  const formControl = input.parentElement; // el elemento padre del input
  const small = formControl.querySelector("small"); //seleccione del padre del input, aquel que tiene la etiqueta small
  formControl.className = "form-control error"; //le asigno la clase
  small.innerText = message; //le envía el error
}

/* la función serErrorFor muestra el error. 
Selecciono el formControl a través de la etiqueta small
Una vez seleccionado, le agrego la clase form-control error, para hacerlo visible
Una vez que se hace visible se muestra el mensaje que estamos enviando */

//en caso de éxito, defino la función:
function setSuccessFor(input) {
  const formControl = input.parentElement; // el elemento padre del input
  formControl.className = "form-control success"; //le asigno la clase
}

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
