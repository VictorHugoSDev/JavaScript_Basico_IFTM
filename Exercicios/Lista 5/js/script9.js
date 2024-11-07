function verificarPalindrometo(texto){
    var textoLimpo =  "";

    for(var i = 0; i < texto.length; i++){
        var caractere = texto[i];

        if((caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z') || (caractere >= '0' && caractere <= '9')){
            textoLimpo += caractere.toLowerCase();
        }
    }

    var inicio = 0;
    var fim = textoLimpo.length - 1;

    while(inicio < fim){
        if(textoLimpo[inicio] != textoLimpo[fim]){
            return false;
        }
        inicio++;
        fim--;
    }

    return true;
}

var texto = prompt("Digite um texto qualquer:");
if(verificarPalindrometo(texto)){
    alert("O texto é um palíndromo!");
}else{
    alert("O texto não é um palíndromo!");
}