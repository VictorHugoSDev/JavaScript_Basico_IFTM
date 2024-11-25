var email = document.getElementById("txtEmail");
var pwd = document.getElementById("txtPwd");
var btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function(){
    if (email.value.trim() === "") {
        alert("Por favor, insira um e-mail.");
        return;
    }

    if (pwd.value.trim() === "") {
        alert("Por favor, insira uma senha.");
        return;
    }

    if(!localStorage.getItem(email.value)){
        alert("Usuário inexistente.Tente outro usuário.");
        return;
    }

    var storagePassword = localStorage.getItem(email.value);
    if(storagePassword != pwd.value){
        alert("Usuário existente, porém senha inválida.")
        return;
    }

    alert("Login realizado com sucesso.")
    
    window.location.href = "ex1.html";
});
