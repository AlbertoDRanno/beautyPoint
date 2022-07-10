// window.addEventListener("load", function () {
//   let form = document.querySelector("form"); //"la etiqueta form, con clase form-register"
//   //console.log(form);
//   let first_name = document.querySelector(".first_name");
//   let last_name = document.querySelector(".last_name");
//   let dni = document.querySelector(".dni");
//   let email = document.querySelector(".email");
//   let phone = document.querySelector(".phone");
//   let password = document.querySelector(".password");
//   let repeatPassword = document.querySelector(".repeatPassword");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault;
//     checkInputs(); //llamo a un método que valide los inputs

//     function checkInputs() {
//       //para eliminar cualquier caracter vacío dentro del texto del input
//       const first_nameValue = first_name.value.trim();
//       const last_nameValue = last_name.value.trim();
//       const dniValue = dni.value.trim();
//       const emailValue = email.value.trim();
//       const phoneValue = phone.value.trim();
//       const passwordValue = password.value.trim();
//       const repeatPasswordValue = repeatPassword.value.trim();

//       //Validaciones:
//       if (first_nameValue === "") {
//         setErrorFor(first_name, "FRONT - Tienes que escribir tu NOMBRE"); //si es vacío, llamo a este método
//       } else {
//         setSuccessFor(first_name);
//       }

//       if (last_nameValue === "") {
//         setErrorFor(last_name, "FRONT - Tienes que escribir tu APELLIDO");
//       } else {
//         setSuccessFor(last_name);
//       }

//       if (dniValue === "") {
//         setErrorFor(dni, "FRONT - Tienes que escribir tu DNI");
//       } else {
//         setSuccessFor(dni);
//       }

//       if (emailValue === "") {
//         setErrorFor(email, "FRONT - No puede dejar el email en blanco");
//       } else if (!isEmail(emailValue)) {
//         setErrorFor(email, "FRONT - No ingreso un email válido");
//       } else {
//         setSuccessFor(email);
//       }

//       if (phoneValue === "") {
//         setErrorFor(phone, "FRONT - Tienes que escribir tu Teléfono");
//       } else {
//         setSuccessFor(phone);
//       }

//       if (passwordValue === "") {
//         setErrorFor(password, "FRONT - Password no debe ingresar en blanco.");
//       } else {
//         setSuccessFor(password);
//       }

//       if (repeatPasswordValue === "") {
//         setErrorFor(
//           repeatPassword,
//           "FRONT - Password2 no debe ngresar en blanco"
//         );
//       } else if (passwordValue !== repeatPasswordValue) {
//         setErrorFor(repeatPassword, "FRONT - Passwords no coinciden");
//       } else {
//         setSuccessFor(repeatPassword);
//       }
//     }
//     //este método recibirá como parámetros el input y el message
//     function setErrorFor(input, message) {
//       const formControl = input.parentElement; // el elemento padre del input
//       const small = formControl.querySelector("small"); //seleccione del padre del input, aquel que tiene la etiqueta small
//       formControl.className = "form-control error"; //le asigno la clase
//       small.innerText = message; //le envía el error
//     }

//     /* la función serErrorFor muestra el error. 
//     Selecciono el formControl a través de la etiqueta small
//     Una vez seleccionado, le agrego la clase form-control error, para hacerlo visible
//     Una vez que se hace visible se muestra el mensaje que estamos enviando */

//     //en caso de éxito, defino la función:
//     function setSuccessFor(input) {
//       const formControl = input.parentElement; // el elemento padre del input
//       formControl.className = "form-control success"; //le asigno la clase
//     }

//     // function isEmail(email) {
//     //   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     //     email
//     //   );
//     // }
//   });
// });


window.addEventListener("load", function () {
    let form = document.querySelector("form"); //"la etiqueta form, con clase form-register"
    //console.log(form);
    let first_name = document.querySelector(".first_name");
    let last_name = document.querySelector(".last_name");
    let dni = document.querySelector(".dni");
    let email = document.querySelector(".email");
    let phone = document.querySelector(".phone");
    let password = document.querySelector(".password");
    let repeatPassword = document.querySelector(".repeatPassword");

  form.addEventListener("submit", function (e) {
    let errores = [];

    if (first_name.value == "") {
      errores.push("Tienes que escribir tu nombre");
      first_name.classList.add("is-invalid");
    } else if (first_name.value.length < 2) {
      errores.push("El nombre debe tener al menos 2 caracteres");
      first_name.classList.add("is-invalid");
    } else {
      first_name.classList.add("is-valid");
      first_name.classList.remove("is-invalid");
    }

    if (last_name.value == "") {
      errores.push("Tienes que escribir tu apellido");
    } else if (last_name.value.length < 2) {
      errores.push("El nombre debe tener al menos 2 caracteres");
    }

    if (dni.value == "") {
      errores.push("Tienes que escribir tu DNI");
    }

    if (errores.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});



