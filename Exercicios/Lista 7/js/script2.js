var boy = document.getElementById("boy");
var textBoy = document.getElementById("textBoy");
var btnSair = document.getElementById("btnSair");

var nome = "";

var personagem = {
    alegre: { img: "img/alegre.png", msg: "", tipo: "alegre" },
    assustado: { img: "img/assustado.png", msg: "O que você quer?", tipo: "assustado" },
    nervoso: { img: "img/nervoso.png", msg: "Não me faça perder o meu tempo!!!", tipo: "nervoso" },
    pensativo: { img: "img/pensativo.png", msg: "zzzzzzz!", tipo: "pensativo" }
};

function changeBoy(personagem) {
    boy.src = personagem.img;
    textBoy.innerHTML = personagem.msg;

    if (personagem.tipo === "alegre") {
        boy.classList.add('animateMove');
        boy.classList.remove('shake');
    } 
    else if (personagem.tipo === "nervoso") {
        boy.classList.add('shake');
        boy.classList.remove('animateMove');
    } 
    else {
        boy.classList.remove('animateMove', 'shake');
    }
}

boy.addEventListener("mouseenter", function () {
    changeBoy(personagem.assustado);
});

boy.addEventListener("mouseout", function () {
    changeBoy(personagem.pensativo);
});

boy.addEventListener("click", function () {
    if (!nome) {
        nome = prompt("Qual é o seu nome?");
        if (nome) {
            personagem.alegre.msg = nome + ", seja bem-vindo!";
            changeBoy(personagem.alegre);
        } else {
            changeBoy(personagem.nervoso);
        }
    } else {
        nome = prompt("Qual é o seu nome?");
        if (nome) {
            personagem.alegre.msg = nome + ", seja bem-vindo!";
            changeBoy(personagem.alegre);
        } else {
            changeBoy(personagem.nervoso);
        }
    }
});

btnSair.addEventListener("click", function(){
    var confirmacao = confirm("Deseja realmente sair do jogo?");

    if(confirmacao){
        window.location.href = "index.html";
    }
});
