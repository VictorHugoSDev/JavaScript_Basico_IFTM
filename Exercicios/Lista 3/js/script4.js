var min;
var max;

while(true){
    var input1 = prompt("Digite o valor minimo");
    var input2 = prompt("Digite o valor maximo");

    min = parseInt(input1);
    max = parseInt(input2);

    if(!isNaN(max) && !isNaN(min) && max > min){ 
        var nroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        document.write(`<h1>${nroAleatorio}</h1>`)
    }

    var confirmacao = confirm('Deseja mais um número (OK) ou exibir os sorteados (Cancelar)')

    if(!confirmacao){
        break;
    }
}
