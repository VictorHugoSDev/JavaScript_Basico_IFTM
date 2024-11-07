var numero = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2:"));

while(numero < 2 || !Number.isInteger(numero)){
    numero = parseInt(prompt("Valor incorreto, digite valor inteiro positivo maior ou igual a 2:"));
}

document.write('<table border="1" cellpadding="10" cellspacing="0">');
    document.write('<tr><th>Base Decimal</th><th>Base Binária</th><th>Base Hexadecimal</th></tr>');

    for (let i = 0; i <= numero; i++) {
        document.write('<tr>');
            document.write('<td>' + i + '</td>');
            document.write('<td>' + i.toString(2) + '</td>');
            document.write('<td>' + i.toString(16).toUpperCase() + '</td>');
        document.write('</tr>');
    }

 document.write('</table>');
