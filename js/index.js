new Splide(".splide", {
  type : "loop",
  cover : true,
  heightRatio : 0.4
}).mount();

function misCards() {

  const cards          = document.getElementById("cards");
  cards.innerHTML = "";
  let card1            = document.createElement("div");
  let card2            = document.createElement("div");
  let card3            = document.createElement("div");
  let card4            = document.createElement("div");
  let card1ImgTop      = document.createElement("img");
  let card1Body        = document.createElement("div");
  let card1Titulo      = document.createElement("h3");
  let card1Descripcion = document.createElement("p");
  let card1Precio      = document.createElement("p");
  let card2ImgTop      = document.createElement("img");
  let card2Body        = document.createElement("div");
  let card2Titulo      = document.createElement("h3");
  let card2Descripcion = document.createElement("p");
  let card2Precio      = document.createElement("p");
  let card3ImgTop      = document.createElement("img");
  let card3Body        = document.createElement("div");
  let card3Titulo      = document.createElement("h3");
  let card3Descripcion = document.createElement("p");
  let card3Precio      = document.createElement("p");
  let card4ImgTop      = document.createElement("img");
  let card4Body        = document.createElement("div");
  let card4Titulo      = document.createElement("h3");
  let card4Descripcion = document.createElement("p");
  let card4Precio      = document.createElement("p");
  card1.classList.add("card", "col-lg-6");
  card2.classList.add("card", "col-lg-6");
  card3.classList.add("card", "col-lg-6");
  card4.classList.add("card", "col-lg-6");
  card1ImgTop.classList.add("card-img-top");
  card1Body.classList.add("card-body");
  card1Titulo.classList.add("card-title");
  card1Descripcion.classList.add("card-text");
  card1Precio.classList.add("card-text");
  card2ImgTop.classList.add("card-img-top");
  card2Body.classList.add("card-body");
  card2Titulo.classList.add("card-title");
  card2Descripcion.classList.add("card-text");
  card2Precio.classList.add("card-text");
  card3ImgTop.classList.add("card-img-top");
  card3Body.classList.add("card-body");
  card3Titulo.classList.add("card-title");
  card3Descripcion.classList.add("card-text");
  card3Precio.classList.add("card-text");
  card4ImgTop.classList.add("card-img-top");
  card4Body.classList.add("card-body");
  card4Titulo.classList.add("card-title");
  card4Descripcion.classList.add("card-text");
  card4Precio.classList.add("card-text");
  card1ImgTop.src = "img/card1.jpg";
  card1Titulo.innerText = "Excursiones y Trekking";
  card1Body.appendChild(card1Titulo);
  card1Descripcion.innerText = "A través de nuestras excursiones grupales al Parque Nacional La Campana y las comunidades aledañas, los participantes podrán contemplar un entorno natural único, donde la flora y fauna nativa son parte del recorrido como de las pruebas y dinámicas  que Ruta Verde Adventure outdoor que diseña para la necesidad grupal.";
  card1Body.appendChild(card1Descripcion);
  card1Precio.innerText = "$20.000 p/p";
  card1Body.appendChild(card1Precio);
  card1.appendChild(card1ImgTop);
  card1.appendChild(card1Body);
  card2ImgTop.src = "img/card2.jpg";
  card2Titulo.innerText = "Caminata Familiar";
  card2Body.appendChild(card2Titulo);
  card2Descripcion.innerText = "Durante el recorrido los participantes se harán consientes de las condiciones ambientales existente y los efectos que tiene en el ecosistema las variaciones climáticas.";
  card2Body.appendChild(card2Descripcion);
  card2Precio.innerText = "$15.000 p/p";
  card2Body.appendChild(card2Precio);
  card2.appendChild(card2ImgTop);
  card2.appendChild(card2Body);
  card3ImgTop.src = "img/card3.jpg";
  card3Titulo.innerText = "Team Building";
  card3Body.appendChild(card3Titulo);
  card3Descripcion.innerText = "La finalidad, es que cada una de las agrupaciones logre ejecutar las instrucciones solicitadas, mediante la planificación, organización y control de las actividades, muy similar a situaciones conflictivas del día a día.";
  card3Body.appendChild(card3Descripcion);
  card3Precio.innerText = "$30.000 p/p";
  card3Body.appendChild(card3Precio);
  card3.appendChild(card3ImgTop);
  card3.appendChild(card3Body);
  card4ImgTop.src = "img/card4.jpg";
  card4Titulo.innerText = "Fogata y Karaoke";
  card4Body.appendChild(card4Titulo);
  card4Descripcion.innerText = "Las fogatas grupales es un servicio exclusivo de Ruta Verde AdventureOutdoor, que se realiza en las dependencias del parque Rosa Agustina Conference, y tiene como objeto la reunión grupal entorno a momentos de reflexión, trasmisión de prácticas de cultura organizacional y el desarrollo de momentos únicos que refuerzan la armonía e igualdad de los miembros participantes.";
  card4Body.appendChild(card4Descripcion);
  card4Precio.innerText = "$30.000 p/p";
  card4Body.appendChild(card4Precio);
  card4.appendChild(card4ImgTop);
  card4.appendChild(card4Body);
  cards.appendChild(card1);
  cards.appendChild(card2);
  cards.appendChild(card3);
  cards.appendChild(card4);
};

misCards();

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
  let nombre       = document-getElementById("nombre").value.trim();
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