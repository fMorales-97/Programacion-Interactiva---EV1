function datosUsuario() {
    document.querySelector(".datos-usuario__img").src = JSON.parse(window.localStorage.getItem("perfilFoto"));
    document.querySelector(".datos-usuario__nombre").innerText = JSON.parse(window.localStorage.getItem("perfilUsuario"));
    document.querySelector(".datos-usuario__email").innerText = JSON.parse(window.localStorage.getItem("perfilEmail"));
  };

window.addEventListener("DOMContentLoaded", function() {
if(localStorage.length < 1) {
    document.querySelector(".datos-usuario").classList.remove("d-flex");
    document.querySelector(".datos-usuario").classList.add("d-none");
    document.querySelector(".hidden-1").classList.add("d-none");
    document.querySelector(".hidden-2").classList.add("d-none");
    alert("Debes iniciar sesión para poder contactarte con nosotros");
} else {
    document.querySelector(".datos-usuario").classList.remove("d-none");
    document.querySelector(".datos-usuario").classList.add("d-flex");
    document.querySelector(".hidden-3").classList.add("d-none");
    datosUsuario();
};  
});