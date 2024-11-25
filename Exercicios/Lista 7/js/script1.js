var email = document.getElementById("txtEmail");
var pwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function () {
    if (email.value.trim() === "") {
        alert("Por favor, insira um e-mail.");
        return;
    }

    if (pwd.value.trim() === "") {
        alert("Por favor, insira uma senha.");
        return;
    }

    if(!email.checkValidity()){
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if(localStorage.getItem(email.value)){
        alert("Usuário já existente. Tente outro.");
        return;
    }

    if(pwd.value.length < 5){
        alert("Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.");
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
