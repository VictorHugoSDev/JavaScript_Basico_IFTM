window.addEventListener("DOMContentLoaded", function() {
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var btnExibir = document.getElementById("btnExibir");
    var passatempo = document.getElementById("passatempo");

    btnExibir.addEventListener("click", function() {
        var nomeValue = nome.value.trim();
        var idadeValue = parseInt(idade.value);
        var passatempoValue = passatempo.value;

        if (nomeValue === "") {
            alert("O campo 'Nome' não pode estar em branco ou conter apenas espaços!");
            return;
        }

        if (isNaN(idadeValue) || idadeValue < 1 || idadeValue > 130) {
            alert("Por favor, insira uma idade válida entre 1 e 130!");
            return;
        }

        if (passatempoValue === "") {
            alert("Você precisa selecionar um passatempo!");
            return;
        }

        localStorage.setItem("nome", nomeValue);
        localStorage.setItem("passatempo", passatempoValue);

        window.location.href = "aguarde.html";
    });
});
