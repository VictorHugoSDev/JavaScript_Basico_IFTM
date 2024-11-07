var texto = prompt("Digite um texto qualquer.");
var letra = prompt("Digite uma letra qualquer.");
var palavras = texto.split(" "); 

var palavrasFiltradas = palavras.filter(function(palavra) {
    return palavra.toLowerCase().startsWith(letra.toLowerCase());
});

document.write(`<p>As palavras começadas com a letra "${letra}" são: ${palavrasFiltradas.join(", ")}</p>`);
