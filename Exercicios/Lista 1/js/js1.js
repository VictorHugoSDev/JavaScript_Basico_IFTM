primeiroNome = prompt("Qual é o seu primeiro nome");

while((primeiroNome == null) || (primeiroNome.trim() == "")){
    primeiroNome = prompt("Digite um primeiro nome válido");
}
segundoNome = prompt("Qual é o seu segundo nome");

while((segundoNome == null) || (segundoNome.trim() == "")){
    segundoNome = prompt("Digite um segundo nome válido");
}

alert(`O seu nome completo é ${primeiroNome} ${segundoNome}.`);
