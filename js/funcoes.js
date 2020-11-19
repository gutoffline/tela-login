function Login(){
    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;

    if(usuario == "joao" && senha == "123"){
        document.querySelector(".mensagem").innerHTML = "Informação CORRETA";
    }else{
        document.querySelector(".mensagem").innerHTML = "Informação ERRADA";
    }
    

    // document.querySelector(".mensagem").innerHTML = "Seu usuário é: " + usuario ;
    // document.querySelector(".mensagem").innerHTML += "<br>Sua senha é: " + senha;
}

// document.querySelector("#botaoLogin").addEventListener("click", function(){
//     Login();
// });