const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  navbarCollapse.classList.toggle("show");
});
let ropa = [];

const consultarApiRopa = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const dataParse = await data.json();
  return dataParse;
};

const tests = async () => {
  const ropa = await consultarApiRopa();

  console.log(ropa);
};

tests();

//validacion del formulario

const formulario = document.querySelector("form");
const nombre = document.getElementById("input-nombre");
const apellido = document.getElementById("input-apellido");
const email = document.getElementById("input-email");
const telefono = document.getElementById("input-telefono");
const mensaje = document.getElementById("input-mensaje");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nombre.value.trim() === "") {
    alert("Por favor, ingrese su nombre.");
    nombre.focus();
    return;
  }

  if (apellido.value.trim() === "") {
    alert("Por favor, ingrese su apellido.");
    apellido.focus();
    return;
  }

  if (email.value.trim() === "") {
    alert("Por favor, ingrese su correo electrónico.");
    email.focus();
    return;
  }

  if (telefono.value.trim() === "") {
    alert("Por favor, ingrese su número de teléfono.");
    telefono.focus();
    return;
  }

  if (mensaje.value.trim() === "") {
    alert("Por favor, ingrese su mensaje.");
    mensaje.focus();
    return;
  }

  formulario.submit();
});
