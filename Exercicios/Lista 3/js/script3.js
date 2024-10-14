var min = 1;
var max;

while(true){
    var input = prompt("Digite o valor maximo");

    max = parseInt(input);

    if(!isNaN(max) && max > min){ 
        var nroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        document.write(`<h1>${nroAleatorio}</h1>`)
    }

    var confirmacao = confirm('Deseja mais um número (OK) ou exibir os sorteados (Cancelar)')

    if(!confirmacao){
        break;
    }
}
