window.addEventListener("DOMContentLoaded", function() {
    var nivel = document.getElementById("nivel");
    var tempoJogo = document.getElementById("tempoJogo");
    var btnIniciar = document.getElementById("btnIniciar");
    var btnPausar = document.getElementById("btnPausar");
    var btnParar = document.getElementById("btnParar");
    var numeroSorteado = document.getElementById("numeroSorteado");
    var acertos = document.getElementById("acertos");
    var percentualAcertos = document.getElementById("percentualAcertos");
    var erros = document.getElementById("erros");
    var pares = document.getElementById("pares");

    var tempo = 0;
    var intervaloNumero;
    var intervaloTempo;
    var tempoRestante;
    var tempoInicial;
    var jogoPausado = false;
    var paresSorteados = 0;
    var contagemAcertos = 0;
    var contagemErros = 0;

    nivel.addEventListener("change", function() {
        switch (nivel.value) {
            case "facil":
                tempoInicial = 105;
                btnIniciar.disabled = false;
                break;
            case "medio":
                tempoInicial = 75;
                btnIniciar.disabled = false;
                break;
            case "dificil":
                tempoInicial = 45;
                btnIniciar.disabled = false;
                break;
            default:
                tempoInicial = 0;
        }
        tempoJogo.textContent = formatarTempo(tempoInicial);
    });

    btnIniciar.addEventListener("click", function() {
        if (jogoPausado) {
            jogoPausado = false;
        } else {
            tempoRestante = tempoInicial;
        }

        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        nivel.disabled = true;

        intervaloNumero = setInterval(() => {
            numeroSorteado.style.color = "#004d40";
            var numero = gerarNumero();
            numeroSorteado.innerText = numero;

            if (numero % 2 === 0) {
                paresSorteados++;
                pares.textContent = paresSorteados;
                atualizarPercentualAcertos();
            }
        }, 1000);

        intervaloTempo = setInterval(() => {
            tempoRestante--;
            tempoJogo.textContent = formatarTempo(tempoRestante);

            if (tempoRestante <= 0) {
                clearInterval(intervaloNumero);
                clearInterval(intervaloTempo);
                numeroSorteado.innerText = "-";
                btnIniciar.disabled = false;
                btnPausar.disabled = true;
                nivel.disabled = false;
            }
        }, 1000);
    });

    numeroSorteado.addEventListener("click", function() {
        var numero = parseInt(numeroSorteado.innerText);

        if (isNaN(numero)) { 
            return;
        }

        if (numero % 2 === 0) {
            contagemAcertos++;
            acertos.textContent = contagemAcertos;
            numeroSorteado.style.color = "green";
        } else {
            contagemErros++;
            erros.textContent = contagemErros;
            numeroSorteado.style.color = "red";
        }

        atualizarPercentualAcertos();
    });

    btnPausar.addEventListener("click", function() {
        clearInterval(intervaloNumero);
        clearInterval(intervaloTempo);
        jogoPausado = true;
        btnPausar.disabled = true;
        btnIniciar.disabled = false;
    });

    btnParar.addEventListener("click", function() {
        btnIniciar.disabled = true;
        nivel.disabled = false;
        nivel.value = "selecione";

        clearInterval(intervaloNumero);
        clearInterval(intervaloTempo);
        numeroSorteado.innerText = "-";

        tempoJogo.textContent = formatarTempo(0);
        tempoRestante = 0;
        tempoInicial = 0;
        jogoPausado = false;
        btnPausar.disabled = true;
        paresSorteados = 0;
        contagemAcertos = 0;
        contagemErros = 0;
        pares.textContent = 0;
        erros.textContent = 0;
        acertos.textContent = 0;
        percentualAcertos.textContent = '0.0%';
    });

    function formatarTempo(segundos) {
        var minutos = Math.floor(segundos / 60);
        var segundosRestantes = segundos % 60;
        return `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;
    }

    function gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function atualizarPercentualAcertos() {
        if (paresSorteados > 0) {
            percentualAcertos.textContent = ((contagemAcertos / paresSorteados) * 100).toFixed(1) + '%';
        } else {
            percentualAcertos.textContent = '0.0%';
        }
    }
});
