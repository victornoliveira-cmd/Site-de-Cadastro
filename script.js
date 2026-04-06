function logar() {
    var usuario = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').valeu
    if(usuario == "Victor" || usuario == "victor@victor.com" && senha == "cookie12345") {
        window.location.href = "home.html"
    }else {
       Swal.fire({
  title: "Usuário/Senha incorretos!Tente novamente",
  text: "Tente novamente",  
  icon: "error"
        }); 
    }
}