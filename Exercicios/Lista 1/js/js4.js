notaBim1 = parseFloat(prompt("Qual a nota do primeiro bimestre (Entre 0 e 50)?"));
while (isNaN(notaBim1) || (notaBim1 < 0) || (notaBim1 > 50)) { 
    alert("Digite uma nota do primeiro bimestre válida (Entre 0 e 50).");
    notaBim1 = parseFloat(prompt("Qual a nota do primeiro bimestre?"));
}
notaBim2 = parseFloat(prompt("Qual a nota do segundo bimestre (Entre 0 e 50)?"));
while (isNaN(notaBim2) || (notaBim2 < 0) || (notaBim2 > 50)) { 
    alert("Digite uma nota do segundo bimestre válida (Entre 0 e 50).");
    notaBim2 = parseFloat(prompt("Qual a nota do segundo bimestre?")); 
}

notaFinal = notaBim1 + notaBim2;
notaFaltante = 60 - notaFinal;

if(notaFinal >= 60){
    alert(`APROVADO. \nNota Final: ${notaFinal.toFixed(2)}`);
}
else{
    alert(`REPROVADO. \nFaltam: ${notaFaltante.toFixed(2)} pontos para ser aprovado`);
}


