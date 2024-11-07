var texto = prompt("Digite um texto qualquer");
var textoSeparado = texto.split(" ");
var primeiraPalavra = textoSeparado[0];
var ultimaPalavra = textoSeparado[textoSeparado.length - 1];

document.write(`<p>${primeiraPalavra} ${ultimaPalavra}</p>`);