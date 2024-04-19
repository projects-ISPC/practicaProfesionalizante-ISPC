function validarUser() {

  var emailog = document.getElementById("emailog").value;
  console.log(emailog);

  var password = document.getElementById("passlog").value;
  console.log(password);
  authorization = validarCredenciales(emailog, password);

  if (authorization) {
    // Si los datos coinciden ocultamos el mensaje de error
    document.getElementById("error").classList.remove("d-block");
    document.getElementById("error").classList.add("d-none");
    // Mostramos un mensaje mencionando que  las Contraseñas coinciden
    document.getElementById("ok").classList.remove("d-none");

    //Cerrando el modal refrescamos la página (Simulación de envío del formulario)
    setTimeout(function () {
      var myModal = document.getElementById("loginModal");
      var modal = bootstrap.Modal.getInstance(myModal);
      modal.hide();
    }, 2000);


    initSession();
  } else {
    // Si las constraseñas no coinciden mostramos un mensaje
    document.getElementById("error").classList.remove("d-none");
    document.getElementById("error").classList.add("d-block");
    console.log("Datos Incorrectos");

  }

}

function initSession() {
  var rol = sessionStorage.getItem('activeUserRol');
  switch (rol) {
    case '1': {

      document.getElementById("menu___item__login").classList.add("d-none");
      document.getElementById("menu___item__register").classList.add("d-none");
      document.getElementById("menu___item__logout").classList.remove("d-none");
      document.getElementById("menu___item__logout").classList.add("d-block");
      const {
        pathname
      } = window.location
      console.log(pathname);
      if (pathname != "/pages/profile.html") {
        document.getElementById("menu___item__perfil").classList.remove("d-none");
      }

      document.getElementById("menu___item__perfil").classList.add("d-block");

    }


  }
}


//función autoejecutable control de sesión
(function () {
  initSession();

})();


//función autoejecutable validacion formulario
(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          validarUser();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();


function logout() {
  sessionStorage.clear();
  window.location.assign('index.html')
  console.log('clear localstorage')
}
