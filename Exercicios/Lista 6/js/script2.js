var mickeyImg = document.getElementById('mickey');
var minnieImg = document.getElementById('minnie');
var plutoImg = document.getElementById('pluto');
var patetaImg = document.getElementById('pateta');

var mickeyBox = mickeyImg.closest('.gaveta');
var minnieBox = minnieImg.closest('.gaveta');
var plutoBox = plutoImg.closest('.gaveta');
var patetaBox = patetaImg.closest('.gaveta');

var mickeyVotes = document.querySelector('#mickey').closest('.gaveta').querySelector('.votos');
var minnieVotes = document.querySelector('#minnie').closest('.gaveta').querySelector('.votos');
var plutoVotes = document.querySelector('#pluto').closest('.gaveta').querySelector('.votos');
var patetaVotes = document.querySelector('#pateta').closest('.gaveta').querySelector('.votos');

function incrementarVotos(votosElemento) {
    var votos = parseInt(votosElemento.textContent);
    votos += 1;
    votosElemento.textContent = votos;

    atualizarCorCaixa();
}

function atualizarCorCaixa(){
    var votosMickey = parseInt(mickeyVotes.textContent);
    var votosMinnie = parseInt(minnieVotes.textContent);
    var votosPluto = parseInt(plutoVotes.textContent);
    var votosPateta = parseInt(patetaVotes.textContent);

    var candidatos = [
        {nome: 'Mickey', votos: votosMickey, caixa:mickeyBox},
        { nome: 'Minnie', votos: votosMinnie, caixa: minnieBox },
        { nome: 'Pluto', votos: votosPluto, caixa: plutoBox },
        { nome: 'Pateta', votos: votosPateta, caixa: patetaBox }
    ];

    candidatos.sort(function(a, b){
        return b.votos - a.votos;
    });

    var maiorNumeroDeVotos = candidatos[0].votos;
    var candidatosEmpatados = candidatos.filter(function (candidato){
        return candidato.votos === maiorNumeroDeVotos;
    });

    if(candidatosEmpatados.length > 1){
        candidatos.forEach(function(candidato){
            candidato.caixa.style.backgroundColor = '#C2D79D';
        });
    }else{
        candidatos.forEach(function(candidato, index) {
            if(index === 0){
                candidato.caixa.style.background = '#FFD700';
            }
            else{
                candidato.caixa.style.backgroundColor = '#C2D79D';
            }
        });
    }

}

mickeyImg.addEventListener('click', function (){
    incrementarVotos(mickeyVotes);
});
minnieImg.addEventListener('click', function (){
    incrementarVotos(minnieVotes);
});
plutoImg.addEventListener('click', function (){
    incrementarVotos(plutoVotes);
});
patetaImg.addEventListener('click', function (){
    incrementarVotos(patetaVotes);
});
