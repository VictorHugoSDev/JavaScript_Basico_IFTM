var jogador1 = Math.floor(Math.random() * 3) + 1;
var jogador2 = Math.floor(Math.random() * 3) + 1;

switch(jogador1){
    case 1:
        document.getElementById("jogador1").src = "assets/papel.png";
        break;
    case 2:
        document.getElementById("jogador1").src = "assets/pedra.png";
        break;
    case 3:
        document.getElementById("jogador1").src = "assets/tesoura.png";
        break;
    default:
        break;
}

switch(jogador2){
    case 1:
        document.getElementById("jogador2").src = "assets/papel.png";
        break;
    case 2:
        document.getElementById("jogador2").src = "assets/pedra.png";
        break;
    case 3:
        document.getElementById("jogador2").src = "assets/tesoura.png";
        break;
    default:
        break;
}


if(jogador1 == jogador2){
    document.getElementById('resultado').innerHTML += 'EMPATE!';
    document.getElementById('resultado').classList.add('resultadoEmpate');
} else if (
    (jogador1 === 3 && jogador2 === 1) || 
    (jogador1 === 2 && jogador2 === 3) || 
    (jogador1 === 1 && jogador2 === 2)
){ 
    document.getElementById('resultado').innerHTML += 'JOGADOR 1 VENCEU!';
    document.getElementById('resultado').classList.add('resultadoVitoria1');
} else{
    document.getElementById('resultado').innerHTML += 'JOGADOR 2 VENCEU!';
    document.getElementById('resultado').classList.add('resultadoVitoria2');
}