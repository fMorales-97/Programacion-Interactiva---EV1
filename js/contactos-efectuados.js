function datosUsuario() {
  document.querySelector(".datos-usuario__img").src = JSON.parse(window.localStorage.getItem("perfilFoto"));
  document.querySelector(".datos-usuario__nombre").innerText = JSON.parse(window.localStorage.getItem("perfilUsuario"));
  document.querySelector(".datos-usuario__email").innerText = JSON.parse(window.localStorage.getItem("perfilEmail"));
};
  
window.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".datos-usuario").classList.add("d-flex");
  datosUsuario();

  let contacto = JSON.parse(window.localStorage.getItem("contacto"));
  let tBody = document.getElementById("tbody");
  contacto.forEach(p=> {

    let tr         = document.createElement("tr");
    let tdNombre   = document.createElement("td");
    let tdApellido = document.createElement("td");
    let tdEmail    = document.createElement("td");
    let tdMensaje  = document.createElement("td");
    tdNombre.innerText = p.nombre;
    tdApellido.innerText = p.apellido;
    tdEmail.innerText = p.email;
    tdMensaje.innerText = p.mensaje;
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdEmail);
    tr.appendChild(tdMensaje);
    tBody.appendChild(tr);
  });
});