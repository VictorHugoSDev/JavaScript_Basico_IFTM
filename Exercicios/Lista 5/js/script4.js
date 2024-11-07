var nomeCompleto = prompt("Digite o seu nome completo?");
var nomeSeparado = nomeCompleto.split(" ");
var primeiroNome = nomeSeparado[0];
var restoNome = nomeSeparado.slice(1).join(" ");

alert(primeiroNome.toUpperCase() + " " + restoNome.toLowerCase());