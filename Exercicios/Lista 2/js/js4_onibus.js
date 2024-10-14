var passageirosH = new Array(10);
var passageirosM = new Array(10);

var contadorH = 0;
var contadorM = 0;

do{
    var nome = prompt('Digite o nome do passageiro');

    while((nome.trim() == "")){
        nome = prompt("Digite um nome válido");
    }
    var sexo = prompt('Digite o gênero do passageiro ("h" para homens ou "m" para mulheres)');

    while((sexo.trim() == "") || (sexo.toLowerCase() != "h" && sexo.toLowerCase() != "m")){
        sexo = prompt("Digite um gênero válido");
    }

    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    
    if(sexo === "h" && contadorH < 10){
        passageirosH[contadorH] = nome;
        contadorH++;
    }
    else if(sexo === "m" && contadorM < 10){
        passageirosM[contadorM] = nome;
        contadorM++;
    }

    var confirmacao = confirm("Deseja digitar mais um passageiro?");
} while(confirmacao && (contadorH < 10 || contadorM < 10));

passageirosH.sort();
passageirosM.sort(); 

document.write(`<h1 style="text-align:center";>Ônibus</h1>
    <table border="1" style="margin: 0 auto; border-collapse: separate; width: 20%; border-spacing: 30px 20px;">
    <thead>
        <tr>
            <th style="background-color: black; height: 40px;"></th>
        </tr>
    </thead>
<tbody>`);

for(var i = 0; i < 10; i++){
    document.write(`
        <tr>
            <td style="text-align:center; width: 50%; height: 40px; border: 2px solid black;">${passageirosM[i] || ''}</td>
            <td style="text-align:center; width: 50%; height: 40px; border: 2px solid black;">${passageirosH[i] || ''}</td>
        </tr>
    `);
}

document.write(`</tbody>
    </table>
    <style>
        table {
            border: 5px solid #385D8A;
            border-radius: 60px;
            box-shadow: 2px 2px 10px #888888;
        }
        td {
            background-color: #fff;
            font-size: 25px;
        }
    </style>
`);