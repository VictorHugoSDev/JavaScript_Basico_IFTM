var passageirosH = [];
var passageirosM = [];

do {
    var nome = prompt('Digite o nome do passageiro');

    while (nome.trim() == "") {
        nome = prompt("Digite um nome válido");
    }
    var sexo = prompt('Digite o gênero do passageiro ("h" para homens ou "m" para mulheres)');

    while ((sexo.trim() == "") || (sexo.toLowerCase() != "h" && sexo.toLowerCase() != "m")) {
        sexo = prompt("Digite um gênero válido");
    }

    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (sexo === "h") {
        passageirosH.push(nome);
    } else if (sexo === "m") {
        passageirosM.push(nome);
    }

    var confirmacao = confirm("Deseja digitar mais um passageiro?");
} while (confirmacao);

passageirosH.sort();
passageirosM.sort();

document.write(`<h1 style="text-align:center;">Ônibus</h1>
    <table border="1" style="margin: 0 auto; border-collapse: separate; width: 20%; border-spacing: 30px 30px;">
    <thead>
        <tr></tr>
    </thead>
<tbody>`);

for (var i = 0; i < Math.max(passageirosM.length, passageirosH.length); i++) {
    document.write(`
        <tr>
            <td style="text-align:center; border: 1px solid black;">${passageirosM[i] || ''}</td>
            <td style="text-align:center; border: 1px solid black;">${passageirosH[i] || ''}</td>
        </tr>
    `);
}

document.write(`</tbody>
    </table>
`);
