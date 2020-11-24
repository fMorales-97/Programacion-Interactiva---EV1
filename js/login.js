function onSignIn(googleUser) {
  var gPerfil = googleUser.getBasicProfile();
  /*console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());*/  
  let perfilFoto    = gPerfil.getImageUrl(); 
  let perfilUsuario = gPerfil.getName();
  let perfilEmail   = gPerfil.getEmail();
  window.localStorage.clear();
  window.localStorage.setItem("perfilFoto", JSON.stringify(perfilFoto));
  window.localStorage.setItem("perfilUsuario", JSON.stringify(perfilUsuario));
  window.localStorage.setItem("perfilEmail", JSON.stringify(perfilEmail));
  window.location.href="index.html";
}

function fPerfilDatos() {
  FB.api('/me', "GET", {fields: "first_name, last_name, email, name, picture.width(80).height(80)"}, function(response) {
    
    let perfilFoto    = response.picture.data.url;
    let perfilUsuario = response.name;
    let perfilEmail   = response.email
    window.localStorage.clear();
    window.localStorage.setItem("perfilFoto", JSON.stringify(perfilFoto));
    window.localStorage.setItem("perfilUsuario", JSON.stringify(perfilUsuario));
    window.localStorage.setItem("perfilEmail", JSON.stringify(perfilEmail));
    window.location.href="index.html";
  });
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if (response.status === "connected") {
      fPerfilDatos();
     } else {
      console.log("Tu codigo ha fracasado, das lastima");
     }
  });
};

window.fbAsyncInit = function() {
  FB.init({
  appId      : '402697054089999',
  cookie     : true,
  xfbml      : true,
  version    : 'v8.0'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.addEventListener("DOMContentLoaded", function() {
  localStorage.clear();
});