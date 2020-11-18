function datosUsuario() {
  document.querySelector(".datos-usuario__img").src = JSON.parse(window.localStorage.getItem("perfilFoto"));
  document.querySelector(".datos-usuario__nombre").innerText = JSON.parse(window.localStorage.getItem("perfilUsuario"));
  document.querySelector(".datos-usuario__email").innerText = JSON.parse(window.localStorage.getItem("perfilEmail"));
};

window.addEventListener("DOMContentLoaded", datosUsuario());

window.mostrarErrores = (errores) => {

    let ul = document.createElement("ul");
      ul.classList.add("alert","alert-warning");
      errores.forEach(e=>{
          let li = document.createElement("li");
          li.innerText = e;
          ul.appendChild(li);
      });
      erroresDiv.appendChild(ul);
  };
  
  const boton = document.getElementById("boton");
  boton.addEventListener("click", function() {
     
    const erroresDiv = document.getElementById("erroresDiv");
    erroresDiv.innerHTML = "";
    let errores      = [];
    let nombre       = document.getElementById("nombre").value.trim();
    let apellido     = document.getElementById("apellido").value.trim();
    let email        = document.getElementById("email").value;
    let mensaje      = document.getElementById("msj").value;
    if(nombre === "") {
      errores.push("Debe ingresar su nombre");
    } if(apellido === "") {
      errores.push("Debe ingresar su apellido");
    } if(email === "") {
      errores.push("Debe ingresar su email");
    } if(mensaje === "") {
      errores.push("Debe dejar un mensaje");
    } if(errores.length === 0) {
      Swal.fire({
        icon : "success",
        title : "Su mensaje ha sido enviado con éxito",
        text : "Ya puede cerrar esta ventana"
      });
    } else {
      window.mostrarErrores(errores);
    }
  });