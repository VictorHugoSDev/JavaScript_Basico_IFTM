var texto = prompt("Digite um texto qualquer para saber quantas palavras possui:");
var textoSeparado = texto.split(" ");
var qtdPalavras = textoSeparado.length;

alert(`A quantidade de palavras é: ${qtdPalavras}`);