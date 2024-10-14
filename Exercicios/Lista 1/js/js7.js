valor1 = parseInt(prompt("Digite o primeiro valor(intervalo[0,255])"));
while(isNaN(valor1) || (valor1 < 0) || (valor1 > 255)){
    valor1 = parseInt(prompt("Digite o 1º valor válido dentro do intervalo indicado([0,255])"));
}

valor2 = parseInt(prompt("Digite o segundo valor(intervalo[0,255])"));
while(isNaN(valor2) || (valor2 < 0) || (valor2 > 255)){
    valor2 = parseInt(prompt("Digite o 2º valor válido dentro do intervalo indicado([0,255])"));
}

valor3 = parseInt(prompt("Digite o terceiro valor(intervalo[0,255])"));
while(isNaN(valor3) || (valor3 < 0) || (valor3 > 255)){
    valor3 = parseInt(prompt("Digite o 3º valor válido dentro do intervalo indicado([0,255])"));
}

document.write(`<h1 style="color:rgb(${valor1},${valor2},${valor3})";>Fundamentos de Web Design II</h1>`);