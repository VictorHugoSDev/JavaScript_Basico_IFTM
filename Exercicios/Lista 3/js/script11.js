var cartaUnica = new Set();

while(cartaUnica.size < 12){
    var cartaSorteada = Math.floor(Math.random() * 27) + 1;
    cartaUnica.add(cartaSorteada);
}

var cartasSorteadas = Array.from(cartaUnica);

document.write(`<h1 style="text-align: center;">JOGUE TRUCO</h1>`)
document.write(`<h4 style="color: red; text-align: center;">Cartas Sorteadas</h4>`)

for(var i = 0; i < 4; i++){
    document.write(`<h2 style="text-align: center;">Cartas do Jogador ${i + 1}:</h2>`)

    document.write(`<div style="text-align: center;">`);
    for(var j = 0; j < 3; j++){
        document.write(`<img src="cartas/carta${cartasSorteadas[i * 3 + j]}.png" style="margin: 10px;">`);
    }
    document.write(`</div>`);
}