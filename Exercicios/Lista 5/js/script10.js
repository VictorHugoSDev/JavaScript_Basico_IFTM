var numero = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2:"));

while(numero < 2 || !Number.isInteger(numero)){
    numero = parseInt(prompt("Valor incorreto, digite valor inteiro positivo maior ou igual a 2:"));
}

console.log("Número em decimal: " + numero);
console.log("Número em binário: " + numero.toString(2));
console.log("Número em hexadecimal: " + numero.toString(16).toUpperCase());