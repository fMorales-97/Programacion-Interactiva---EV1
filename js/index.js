function datosUsuario() {
  document.querySelector(".datos-usuario__img").src = JSON.parse(window.localStorage.getItem("perfilFoto"));
  document.querySelector(".datos-usuario__nombre").innerText = JSON.parse(window.localStorage.getItem("perfilUsuario"));
  document.querySelector(".datos-usuario__email").innerText = JSON.parse(window.localStorage.getItem("perfilEmail"));
};

window.addEventListener("DOMContentLoaded", datosUsuario());

new Splide(".splide", {
  type : "loop",
  cover : true,
  heightRatio : 0.4
}).mount();