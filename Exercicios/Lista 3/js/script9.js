var qtdGrupos = prompt("Quantos grupos participarão do sorteio (necessariamente deve ser mais de 1)?");

if(isNaN(qtdGrupos) || qtdGrupos <= 1){
    alert("Por favor, insira um número válido de grupos.");
} else{
    var nomesParticipantes = new Array(qtdGrupos);

    for(i = 0; i < qtdGrupos; i++){
        nomesParticipantes[i] = prompt(`Qual o nome do(a) ${i + 1}º participante?`);
    }
    
    var nrosUnicos = new Set();
    
    while(nrosUnicos.size < qtdGrupos){
        var ordemAleatoria = Math.floor(Math.random() * qtdGrupos);
        nrosUnicos.add(ordemAleatoria);
    }
    
    var alunosSorteados = Array.from(nrosUnicos);
    
    var alunosSorteados = Array.from(nrosUnicos).map(i => nomesParticipantes[i]);
    
    for(i = 0; i < qtdGrupos; i++){
        document.write(`<h2> ${i + 1}º - ${alunosSorteados[i]}</h2>`);
    }
    
}

