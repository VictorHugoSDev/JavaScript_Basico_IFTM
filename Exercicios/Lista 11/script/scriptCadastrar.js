window.addEventListener("DOMContentLoaded", function() {
    var cadastroForm = document.getElementById("cadastroForm");
    var cadastroError = document.getElementById("cadastroError");
    var somSucesso = document.getElementById("somSucesso");
    var somErro = document.getElementById("somErro");

    cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault();

        var usuario = document.getElementById("username").value;
        var senha = document.getElementById("password").value;
        var confirmarSenha = document.getElementById("confirmPassword").value;

        cadastroError.style.display = "none";
        cadastroError.textContent = "";

        if (!usuario || !senha || !confirmarSenha) {
            cadastroError.textContent = "Por favor, preencha todos os campos.";
            cadastroError.style.display = "block";
            if (!somErro.paused) {
                somErro.currentTime = 0;
            }
            somErro.play();
            return;
        }

        if (senha !== confirmarSenha) {
            cadastroError.textContent = "As senhas não coincidem. Por favor, verifique.";
            cadastroError.style.display = "block";
            if (!somErro.paused) {
                somErro.currentTime = 0;
            }
            somErro.play();
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        if (usuarios.some(u => u.usuario === usuario)) {
            cadastroError.textContent = "Este usuário já está cadastrado!";
            cadastroError.style.display = "block";
            if (!somErro.paused) {
                somErro.currentTime = 0;
            }
            somErro.play();
        } else {
            usuarios.push({ usuario: usuario, senha: senha });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            cadastroError.textContent = "Cadastro realizado com sucesso!";
            cadastroError.classList.add("sucesso");
            cadastroError.style.display = "block";

            if (!somSucesso.paused) {
                somSucesso.currentTime = 0;
            }
            somSucesso.play();

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        }
    });
});