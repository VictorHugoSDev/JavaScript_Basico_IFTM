window.addEventListener("DOMContentLoaded", function() {
    var nome = localStorage.getItem("nome");
    var passatempo = localStorage.getItem("passatempo");
    var nomeUsuario = document.getElementById("nomeUsuario");
    var btnPerfil = document.getElementById("btnPerfil");
    var carroImg = document.getElementById("carroImg");
    var fabricante = document.getElementById("fabricante");
    var nomeVeiculo = document.getElementById("nomeVeiculo");
    var potencia = document.getElementById("potencia");
    var garantia = document.getElementById("garantia");
    var consumo = document.getElementById("consumo");

    nomeUsuario.textContent = nome;

    var carros = {
        "shopping": [
            {nome: "Civic", fabricante: "Honda", potencia: "150 cv", garantia: "3 anos", consumo: "9,7 km/l", imagem: "civic.jpg"},
            {nome: "Corolla", fabricante: "Toyota", potencia: "144 cv", garantia: "3 anos", consumo: "10,6 km/l", imagem: "corolla.jpg"}
        ],
        "natureza": [
            {nome: "Troller", fabricante: "Ford", potencia: "200 cv", garantia: "3 anos", consumo: "7,7 km/l", imagem: "troller.jpg"},
            {nome: "Wrangler", fabricante: "Jeep", potencia: "199 cv", garantia: "2 anos", consumo: "3,1 km/l", imagem: "wrangler.jpg" }
        ]
    };

    var carrosSelecionados = (passatempo === "shopping") ? carros.shopping : carros.natureza;
    var indiceCarro = 0;

    function atualizarVeiculo() {
        var carro = carrosSelecionados[indiceCarro];
        carroImg.src = "img/" + carro.imagem;
        fabricante.textContent = carro.fabricante;
        nomeVeiculo.textContent = carro.nome;
        potencia.textContent = carro.potencia;
        garantia.textContent = carro.garantia;
        consumo.textContent = carro.consumo;
    }

    atualizarVeiculo();

    var intervaloSlideshow = setInterval(function() {
        indiceCarro = (indiceCarro + 1) % carrosSelecionados.length;
        atualizarVeiculo();
    }, 2000);

    btnPerfil.addEventListener("click", function() {
        window.location.href = "index.html"; 
    });
});
