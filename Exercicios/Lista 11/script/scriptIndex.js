window.addEventListener("DOMContentLoaded", () => {
    var loginForm = document.getElementById("loginForm");
    var loginError = document.getElementById("loginError");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        var usuario = document.getElementById("username").value;
        var senha = document.getElementById("password").value;

        loginError.style.display = "none";
        loginError.textContent = "";

        if (!usuario || !senha) {
            loginError.textContent = "Por favor, preencha todos os campos.";
            loginError.style.display = "block";
            return;
        }

        var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        var usuarioEncontrado = usuarios.find(u => u.usuario === usuario);

        if (!usuarioEncontrado) {
            loginError.textContent = "Usuário não encontrado. Cadastra-se.";
            loginError.style.display = "block";
            return;
        }

        if (usuarioEncontrado.senha !== senha) {
            loginError.textContent = "Senha incorreta. Tente novamente.";
            loginError.style.display = "block";
            return;
        }

        localStorage.setItem("usuarioLogado", usuario);

        window.location.href = "jogo.html";
    });
});