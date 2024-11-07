var texto = prompt("Digite um texto qualquer.");
var palavras = texto.split(" ");
var letras = [];

for (var i = 0; i < palavras.length; i++){
    var primeiraLetra = palavras[i].charAt(0).toLowerCase();
    if(!letras.includes(primeiraLetra)){
        letras.push(primeiraLetra);
    }
}

letras.sort();

var resultado = "";

letras.forEach(function(letra) {
    var palavrasFiltradas = palavras.filter(function(palavra){
        return palavra.toLowerCase().startsWith(letra);
    });

    palavrasFiltradas.sort();

    if(palavrasFiltradas.length > 0){
        resultado += `<p>As palavras começadas com a letra <b>"${letra}"</b> são: </p>`;
        resultado += `<ul>`;
        palavrasFiltradas.forEach(function(palavra){
            resultado += `<li>${palavra}</li>`;
        });
        resultado += `</ul>`;
    }
});

document.write(resultado);
