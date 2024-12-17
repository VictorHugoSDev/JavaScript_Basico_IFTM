window.addEventListener("DOMContentLoaded", function() {
    var tempo = document.getElementById("tempo");
    var prazo = Math.floor(Math.random() * 6) + 5;

    tempo.textContent = prazo;

    function atualizarCor(prazo) {
        if (prazo >= 1 && prazo <= 3) {
            tempo.style.color = "red";
        } else {
            tempo.style.color = "black";
        }
    }

    var intervalo = setInterval(function() {
        prazo--;

        tempo.textContent = prazo;

        atualizarCor(prazo);

        if (prazo === 0) {
            clearInterval(intervalo);
            window.location.href = "verVeiculos.html";
        }
    }, 1000);
});
