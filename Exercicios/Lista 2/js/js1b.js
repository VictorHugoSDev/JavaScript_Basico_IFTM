var hoje = new Date();
var diaDaSemana = hoje.getDay();

switch(diaDaSemana){
    case 0:
        document.write(`<h1 style="color:darkturquoise">Hoje é domingo</h1>`);
        break;
    case 1:
        document.write(`<h1 style="color:darkturquoise">Hoje é segunda-feira</h1>`);
        break;
    case 2:
        document.write(`<h1 style="color:darkturquoise">Hoje é terça-feira</h1>`);
        break;
    case 3:
        document.write(`<h1 style="color:darkturquoise">Hoje é quarta-feira</h1>`);
        break;
    case 4:
        document.write(`<h1 style="color:darkturquoise">Hoje é quinta-feira</h1>`);
        break;
    case 5:
        document.write(`<h1 style="color:darkturquoise">Hoje é sexta-feira</h1>`);
        break;
    case 6:
        document.write(`<h1 style="color:darkturquoise">Hoje é sábado</h1>`);
        break;
}
