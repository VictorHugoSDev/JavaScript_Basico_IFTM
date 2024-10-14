var qtdAlunos = prompt("Quantos alunos vão participar na excursão?");

var excursao = new Array(qtdAlunos);
var nomesAlunos = new Array(qtdAlunos);
var idadeAlunos =  new Array(qtdAlunos);

for(i = 0; i < qtdAlunos; i++){
    nomesAlunos[i] = prompt(`Qual o nome do(a) ${i + 1}º aluno(a)?`);
    idadeAlunos[i] = parseInt(prompt(`Qual a idade do(a) ${i + 1}º aluno(a)?`));
}

var indice = parseInt(Math.random() * nomesAlunos.length);
var somaIdade = 0;
var media = 0;

for(i = 0; i < qtdAlunos; i++){
    somaIdade += idadeAlunos[i];
}

media = somaIdade / qtdAlunos;
media = media.toFixed(2);

document.write(`<h1>A idade média dos alunos é: ${media}</h1>`);
document.write(`<h1>O aluno ou aluna sorteado(a) para ganhar o almoço é: ${nomesAlunos[indice]}</h1>`);