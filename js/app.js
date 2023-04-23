const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  navbarCollapse.classList.toggle("show");
});
//api
const consultarApiRopa = async () => {
  const dataMens = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const dataMensParse = await dataMens.json();
  const dataWomens = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const dataWomensParse = await dataWomens.json();

  const allData = dataMensParse.concat(dataWomensParse);
  return allData;
};

const tests = async () => {
  const ropa = await consultarApiRopa();

  for (let i = 0; i < 9; i++) {
    document.getElementById("card-title-" + i).innerHTML = ropa[i].title;
    document.getElementById("card-description-" + i).innerHTML =
      ropa[i].description.slice(0, 100) + "...";
    document.getElementById("card-image-" + i).src = ropa[i].image;
    document.getElementById("card-price-" + i).innerHTML = "$" + ropa[i].price;
  }
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
