window.addEventListener("DOMContentLoaded", function() {
    var nivel = document.getElementById("nivel");
    var tempoJogo = document.getElementById("tempoJogo");
    var btnIniciar = document.getElementById("btnIniciar");
    var btnPausar = document.getElementById("btnPausar");
    var btnParar = document.getElementById("btnParar");
    var btnMenu = document.getElementById("btnMenu");
    var numeroSorteado = document.getElementById("numeroSorteado");
    var acertos = document.getElementById("acertos");
    var percentualAcertos = document.getElementById("percentualAcertos");
    var erros = document.getElementById("erros");
    var pares = document.getElementById("pares");
    var btnRegras = document.getElementById("btnRegras");
    var btnClassificacao = document.getElementById("btnClassificacao");
    var somMenu = document.getElementById("somMenu");
    var somVoltar = document.getElementById("somVoltar");
    var somPlay = document.getElementById("somPlay");
    var somPausar = document.getElementById("somPausar");
    var somParar = document.getElementById("somParar");
    var somAcerto = document.getElementById("somAcerto");
    var somErro = document.getElementById("somErro");
    var fimDeJogo = document.getElementById("fimDeJogo");

    var intervaloNumero;
    var intervaloTempo;
    var tempoRestante;
    var tempoInicial;
    var jogoPausado = false;
    var paresSorteados = 0;
    var contagemAcertos = 0;
    var contagemErros = 0;
    var tempoNivel = 0;
    var pontos = 0;

    var usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        window.location.href = "index.html";
    }

    btnMenu.addEventListener("click", function() {
        if (!somVoltar.paused) {
            somVoltar.currentTime = 0;
        }
        somVoltar.play();
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });

    nivel.addEventListener("change", function() {
        contagemAcertos = 0;
        contagemErros = 0;
        paresSorteados = 0;
        acertos.textContent = contagemAcertos;
        erros.textContent = contagemErros;
        pares.textContent = paresSorteados;
        percentualAcertos.textContent = '0.0%';

        switch (nivel.value) {
            case "facil":
                if (!somMenu.paused) {
                    somMenu.currentTime = 0;
                }
                somMenu.play();
                tempoInicial = 105;
                btnIniciar.disabled = false;
                tempoNivel = 1000;
                break;
            case "medio":
                if (!somMenu.paused) {
                    somMenu.currentTime = 0;
                }
                somMenu.play();
                tempoInicial = 75;
                btnIniciar.disabled = false;
                tempoNivel = 700;
                break;
            case "dificil":
                if (!somMenu.paused) {
                    somMenu.currentTime = 0;
                }
                somMenu.play();
                tempoInicial = 45;
                btnIniciar.disabled = false;
                tempoNivel = 500;
                break;
            default:
                tempoInicial = 0;
        }
        tempoJogo.textContent = formatarTempo(tempoInicial);
    });

    btnIniciar.addEventListener("click", function() {
        if (!somPlay.paused) {
            somPlay.currentTime = 0;
        }
        somPlay.play();

        if (jogoPausado) {
            jogoPausado = false;
        } else {
            tempoRestante = tempoInicial;
            pontos = 0;
        }

        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        nivel.disabled = true;
        btnParar.disabled = false;

        intervaloNumero = setInterval(() => {
            numeroSorteado.style.color = "#fff";
            var numero = gerarNumero();
            numeroSorteado.innerText = numero;

            numeroSorteado.dataset.clicado = "false";
            numeroSorteado.style.pointerEvents = "auto";

            if (numero % 2 === 0) {
                paresSorteados++;
                pares.textContent = paresSorteados;
                atualizarPercentualAcertos();
            }
        }, tempoNivel);

        intervaloTempo = setInterval(() => {
            tempoRestante--;
            tempoJogo.textContent = formatarTempo(tempoRestante);

            if (tempoRestante <= 0) {
                if (!fimDeJogo.paused) {
                    fimDeJogo.currentTime = 0;
                }
                fimDeJogo.play();
                clearInterval(intervaloNumero);
                clearInterval(intervaloTempo);
                btnPausar.disabled = true;
                nivel.disabled = false;
                btnParar.disabled = true;
                numeroSorteado.style.color = "#fff";
                numeroSorteado.innerHTML = `<strong>Fim de Jogo!</strong><br>`;
                numeroSorteado.style.fontSize = '80px';
                
                salvarResultado();

                nivel.value = "selecione";
            }
        }, 1000);
    });

    numeroSorteado.addEventListener("click", function() {
        if (jogoPausado) {
            return;
        }

        var numero = parseInt(numeroSorteado.innerText);

        if (isNaN(numero)) {
            return;
        }

        if (numeroSorteado.dataset.clicado === "true") {
            return;
        }

        numeroSorteado.dataset.clicado = "true";

        if (numero % 2 === 0) {
            if (!somAcerto.paused) {
                somAcerto.currentTime = 0;
            }
            somAcerto.play();
            contagemAcertos++;
            acertos.textContent = contagemAcertos;
            numeroSorteado.style.color = "green";

            switch (nivel.value) {
                case "facil":
                    pontos += 2;
                    break;
                case "medio":
                    pontos += 3;
                    break;
                case "dificil":
                    pontos += 4;
                    break;
            }
        } else {
            if (!somErro.paused) {
                somErro.currentTime = 0;
            }
            somErro.play();
            contagemErros++;
            erros.textContent = contagemErros;
            numeroSorteado.style.color = "red";

            switch (nivel.value) {
                case "facil":
                    pontos -= 1;
                    break;
                case "medio":
                    pontos -= 1;
                    break;
                case "dificil":
                    pontos -= 2;
                    break;
            }
        }

        atualizarPercentualAcertos();
    });

    btnPausar.addEventListener("click", function() {
        if (!somPausar.paused) {
            somPausar.currentTime = 0;
        }
        somPausar.play();

        clearInterval(intervaloNumero);
        clearInterval(intervaloTempo);
        jogoPausado = true;
        btnPausar.disabled = true;
        btnIniciar.disabled = false;
        numeroSorteado.style.pointerEvents = "none";
    });

    btnParar.addEventListener("click", function() {
        if (!somParar.paused) {
            somParar.currentTime = 0;
        }
        somParar.play();

        btnIniciar.disabled = true;
        nivel.disabled = false;
        nivel.value = "selecione";

        clearInterval(intervaloNumero);
        clearInterval(intervaloTempo);
        numeroSorteado.innerText = "-";
        numeroSorteado.style.pointerEvents = "auto";

        tempoJogo.textContent = formatarTempo(0);
        tempoRestante = 0;
        tempoInicial = 0;
        jogoPausado = false;
        btnPausar.disabled = true;
        paresSorteados = 0;
        contagemAcertos = 0;
        contagemErros = 0;
        pontos = 0;
        pares.textContent = 0;
        erros.textContent = 0;
        acertos.textContent = 0;
        percentualAcertos.textContent = '0.0%';
    });

    btnRegras.addEventListener("click", function(){
        if (!somMenu.paused) {
            somMenu.currentTime = 0;
        }
        somMenu.play();
        mostrarRegras();
    });

    btnClassificacao.addEventListener("click", function(){
        if (!somMenu.paused) {
            somMenu.currentTime = 0;
        }
        somMenu.play();
        exibirClassificacao();
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

    function mostrarRegras() {
        alert("Regras do Jogo:\n" +
            "1. O objetivo do jogo é clicar no número par.\n" +
            "2. A cada acerto, você ganha pontos, e a cada erro, perde pontos.\n" +
            "3. Você pode escolher o nível de dificuldade do jogo:\n" +
            "   - Nível Fácil: +2 pontos por acerto e -1 ponto por erro.\n" +
            "   - Nível Médio: +3 pontos por acerto e -1 ponto por erro.\n" +
            "   - Nível Difícil: +4 pontos por acerto e -2 pontos por erro.\n" +
            "4. Quando o tempo acabar, a classificação será exibida.\n" +
            "5. A classificação é ordenada pela pontuação.");
    }

    function salvarResultado() {
        if (usuarioLogado) {
            var dificuldade = nivel.value;
    
            var resultado = {
                nome: usuarioLogado,
                pontos: pontos,
                acertos: contagemAcertos,
                erros: contagemErros,
                dificuldade: dificuldade
            };
    
            var resultados = JSON.parse(localStorage.getItem("resultados")) || [];
    
            resultados.push(resultado);
    
            resultados.sort((a, b) => b.pontos - a.pontos);
    
            localStorage.setItem("resultados", JSON.stringify(resultados));
        }
    }
    
    function exibirClassificacao() {
        var resultados = JSON.parse(localStorage.getItem("resultados")) || [];
    
        if (resultados.length === 0) {
            alert("Ainda não há resultados registrados.");
        } else {
            var classificacao = resultados.map((r, index) => 
                `${r.nome} - ${r.dificuldade} - PONTOS: ${r.pontos} - ACERTOS: ${r.acertos} - ERROS: ${r.erros}`
            ).join("\n");
    
            alert(`CLASSIFICAÇÃO:\n${classificacao}`);
        }
    }    
});
