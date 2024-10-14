nome = prompt("Qual é o seu nome?");

while((nome == null) || (nome.trim() == "")){
    nome = prompt("Digite um nome válido");
}
idade = prompt("Qual é a sua idade?");

while((idade == null) || (idade.trim() == "") || (idade < 0)){
    idade = parseInt(prompt("Digite uma idade válida"));
}

if(idade >= 18){
    alert(`${nome}, você já POSSUI idade para tirar carteira.`);
}
else{
    alert(`${nome}, você ainda não POSSUI idade para tirar carteira, ainda falta(m) ${18 - idade} anos.`);
}