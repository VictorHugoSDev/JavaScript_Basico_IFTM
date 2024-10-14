var codigos = ['P2', 'AP', 'POO1', 'FBD', 'JSB'];
var disciplinas = ['Projeto Sistema Web MVC e SQL', 'Algoritmos e Programação', 'Programação Orientada a Objetos 1', 'Fundamentos de Banco de Dados', 'JavaScript Básico'];

document.write(`<table border="1" style="margin: 0 auto;">
    <thead>
        <tr>
            <th>Código</th>
            <th>Disciplina</th>
        </tr>
    </thead>
<tbody>`);

for(var i = 0; i < codigos.length; i++){
    document.write(`
        <tr>
            <td>${codigos[i]}</td>
            <td>${disciplinas[i]}</td>
        </tr>
`);
}

document.write(`</tbody></table>`);

