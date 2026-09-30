const botonWsp = document.getElementById("btn-wsp");
const mensaje = document.getElementById("mensaje");
let temporizador;

botonWsp.addEventListener("click", function () {
  mensaje.classList.add("visible");

  clearTimeout(temporizador);
  temporizador = setTimeout(function () {
    mensaje.classList.remove("visible");
  }, 3000);
});