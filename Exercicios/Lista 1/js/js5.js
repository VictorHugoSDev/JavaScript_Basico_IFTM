nome = prompt("Por favor, digite seu nome completo.");

quantidade = nome.replace(/ /g, '').length;

document.write(`<p>O nome informado possui a seguinte quantidade de caracteres: ${quantidade}</p>`);