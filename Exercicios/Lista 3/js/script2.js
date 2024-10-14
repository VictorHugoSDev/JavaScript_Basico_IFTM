var min = 10;
var max = 50;

var nroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

document.write(`<h1>${nroAleatorio}</h1>`);