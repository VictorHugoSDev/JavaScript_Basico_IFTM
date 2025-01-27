window.addEventListener("DOMContentLoaded", function(){
    
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

    nivel.addEventListener("change", function(){
        var tempo;

        switch(nivel.value){
            case "facil":
                tempo = 105;
                break;
            case "medio":
                tempo = 75;
                break;
            case "dificil":
                tempo = 45;
                break;
            default:
                tempo = 0;
        }

        tempoJogo.textContent = formatarTempo(tempo);
    });

    function formatarTempo(segundos){
        var minutos = Math.floor(segundos / 60);
        var segundosRestantes = segundos % 60;
        return `${String(minutos).padStart(2,"0")}:${String(segundosRestantes).padStart(2, "0")}`
    }
});