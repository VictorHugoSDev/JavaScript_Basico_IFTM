vezes = parseInt(prompt("Digite um valor inteiro positivo maior do que zero."));

while(isNaN(vezes) || (vezes < 1) || !Number.isInteger(vezes)){
    vezes = parseInt(prompt("Digite um valor inteiro positivo maior do que zero."));
}

nome = prompt("Digite seu nome completo");

for (i = 0; i < vezes; i++) { 
    document.write(`<p>${i+1}- ${nome}</p>`);
}