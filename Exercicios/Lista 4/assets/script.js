var qtde = parseInt(prompt('Digite o tamanho da senha desejada!'));

const letrasVetor = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

var senha = '';

for(i = 0; i < qtde; i++){
    const indiceAleatorio = Math.floor(Math.random() * letrasVetor.length);
    senha += letrasVetor[indiceAleatorio];
}

document.write(`<h1>Senha: ${senha}</h1>`);