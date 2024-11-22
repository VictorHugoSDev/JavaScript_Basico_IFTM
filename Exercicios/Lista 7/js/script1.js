var email = document.getElementById("txtEmail");
var pwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function () {
    if(!email.checkValidity()){
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if(localStorage.getItem(email.value)){
        alert("E-mail já cadastrado!");
        return;
    }

    if(pwd.value.length < 5){
        alert("A senha deve conter no mínimo 5 caracteres.");
        return;
    }

    if (typeof (Storage) !== "undefined") {
        window.localStorage.setItem(email.value, pwd.value);
        alert("Cadastrado com sucesso!");
        window.location.href = "index.html";
    }
    else {
        alert("Atualize o seu navegador. Não é possível cadastrar.");
    }

});