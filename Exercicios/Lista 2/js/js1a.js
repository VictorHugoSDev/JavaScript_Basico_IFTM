var hoje = new Date();
var diaDaSemana = hoje.getDay();
var semana  = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

document.write(`<h1>Hoje é ${semana[diaDaSemana]}</h1>`);