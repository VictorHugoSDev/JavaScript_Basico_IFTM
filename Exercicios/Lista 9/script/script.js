window.addEventListener("DOMContentLoaded", function(){
    // a) Números binários
    var padraoA = /^[01]+$/;

    var txtInfoA = document.getElementById("txtInfoA");
    var btnValidarA = document.getElementById("btnValidarA");

    btnValidarA.addEventListener("click", function(){
        if(padraoA.test(txtInfoA.value)){
            alert("Padrão A válido");
        }else{
            alert("Padrão A inválido")
        }
    });

    // b) Números hexadecimais
    var padraoB = /^0x?[A-Fa-f0-9]+$/;

    var txtInfoB = document.getElementById("txtInfoB");
    var btnValidarB = document.getElementById("btnValidarB");

    btnValidarB.addEventListener("click", function(){
        if(padraoB.test(txtInfoB.value)){
            alert("Padrão B válido");
        }else{
            alert("Padrão B inválido")
        }
    });

    // c) Números decimais
    var padraoC = /^[-+]?\d+(\.\d+)?$/;

    var txtInfoC = document.getElementById("txtInfoC");
    var btnValidarC = document.getElementById("btnValidarC");

    btnValidarC.addEventListener("click", function(){
        if(padraoC.test(txtInfoC.value)){
            alert("Padrão C válido");
        }else{
            alert("Padrão C inválido")
        }
    });

    // d) Números reais (pode haver casas decimais). Ex:“10”, “10,5”, “3.14” (, ou . são aceitos)
    var padraoD = /^[-+]?\d+([.,]\d+)?$/;

    var txtInfoD = document.getElementById("txtInfoD");
    var btnValidarD = document.getElementById("btnValidarD");

    btnValidarD.addEventListener("click", function(){
        if(padraoD.test(txtInfoD.value)){
            alert("Padrão D válido");
        }else{
            alert("Padrão D inválido")
        }
    });

    // e) Horário no formato: 00:00:00
    var padraoE = /^([01]?[0-9]|2[0-3]):([0-5])?([0-9]):([0-5])?([0-9])$/;

    var txtInfoE = document.getElementById("txtInfoE");
    var btnValidarE = document.getElementById("btnValidarE");

    btnValidarE.addEventListener("click", function(){
        if(padraoE.test(txtInfoE.value)){
            alert("Padrão E válido");
        }else{
            alert("Padrão E inválido")
        }
    });

    // f) Data de nascimento: dd/mm/aaaa ou dd/mm/aa
    var padraoF = /^([0-2]?[0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

    var txtInfoF = document.getElementById("txtInfoF");
    var btnValidarF = document.getElementById("btnValidarF");

    btnValidarF.addEventListener("click", function(){
        if(padraoF.test(txtInfoF.value)){
            alert("Padrão F válido");
        }else{
            alert("Padrão F inválido")
        }
    });

    // g) CEP
    var padraoG = /^\d{5}-?\d{3}$/;

    var txtInfoG = document.getElementById("txtInfoG");
    var btnValidarG = document.getElementById("btnValidarG");

    btnValidarG.addEventListener("click", function(){
        if(padraoG.test(txtInfoG.value)){
            alert("Padrão G válido");
        }else{
            alert("Padrão G inválido")
        }
    });

    // h) CPF
    var padraoH = /^(\d{3}\.?\d{3}\.?\d{3})-?\d{2}$/;

    var txtInfoH = document.getElementById("txtInfoH");
    var btnValidarH = document.getElementById("btnValidarH");

    btnValidarH.addEventListener("click", function(){
        if(padraoH.test(txtInfoH.value)){
            alert("Padrão H válido");
        }else{
            alert("Padrão H inválido")
        }
    });


    // i) CNPJ 
    var padraoI = /^(\d{2}\.?\d{3}\.?\d{3})\/?\d{4}-?\d{2}$/;

    
    var txtInfoI = document.getElementById("txtInfoI");
    var btnValidarI = document.getElementById("btnValidarI");

    btnValidarI.addEventListener("click", function(){
        if(padraoI.test(txtInfoI.value)){
            alert("Padrão I válido");
        }else{
            alert("Padrão I inválido")
        }
    });

    // j) Números entre parênteses
    var padraoJ = /^\(\s*\d+\s*\)$/;

    var txtInfoJ = document.getElementById("txtInfoJ");
    var btnValidarJ = document.getElementById("btnValidarJ");

    btnValidarJ.addEventListener("click", function(){
        if(padraoJ.test(txtInfoJ.value)){
            alert("Padrão J válido");
        }else{
            alert("Padrão J inválido")
        }
    });

    // k) Email. Padrão esperado: xxx@yyy.ccc (c: poderá ter de 2 a 3 caracteres)
    var padraoK = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    var txtInfoK = document.getElementById("txtInfoK");
    var btnValidarK = document.getElementById("btnValidarK");

    btnValidarK.addEventListener("click", function(){
        if(padraoK.test(txtInfoK.value)){
            alert("Padrão K válido");
        }else{
            alert("Padrão K inválido")
        }
    });

    // l) Endereço (domínio ou IPv4). Ex: 192.168.1.1, 255.255.255.255 (somente nros)
    var padraoL = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/;

    var txtInfoL = document.getElementById("txtInfoL");
    var btnValidarL = document.getElementById("btnValidarL");

    btnValidarL.addEventListener("click", function(){
        if(padraoL.test(txtInfoL.value)){
            alert("Padrão L válido");
        }else{
            alert("Padrão L inválido")
        }
    });

    // m) Altura de uma pessoa. Ex: x,xz ou x.xz (onde z é opcional)
    var padraoM = /^\d{1}[\.,]{1}\d{0,2}$/;

    var txtInfoM = document.getElementById("txtInfoM");
    var btnValidarM = document.getElementById("btnValidarM");

    btnValidarM.addEventListener("click", function(){
        if(padraoM.test(txtInfoM.value)){
            alert("Padrão M válido");
        }else{
            alert("Padrão M inválido")
        }
    });

    // n) Nome próprio (letra inicial maiúscula e demais minúsculas). Ex: Wilton
    var padraoN = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;

    var txtInfoN = document.getElementById("txtInfoN");
    var btnValidarN = document.getElementById("btnValidarN");

    btnValidarN.addEventListener("click", function(){
        if(padraoN.test(txtInfoN.value)){
            alert("Padrão N válido");
        }else{
            alert("Padrão N inválido")
        }
    });

    // o) Telefone no padrão internacional. Ex: +xx(xx)xxxxx-xxxx
    var padraoO = /^\+\d{1,3}\(\d{2,3}\)\d{3,5}-\d{4}$/;

    var txtInfoO = document.getElementById("txtInfoO");
    var btnValidarO = document.getElementById("btnValidarO");

    btnValidarO.addEventListener("click", function(){
        if(padraoO.test(txtInfoO.value)){
            alert("Padrão O válido");
        }else{
            alert("Padrão O inválido")
        }
    });

    // p) Texto: “IFTM campus Uberlândia” ou “IFTM campus Uberlândia Centro”
    var padraoP = /^IFTM campus Uberlândia( Centro)?$/;
    
    var txtInfoP = document.getElementById("txtInfoP");
    var btnValidarP = document.getElementById("btnValidarP");

    btnValidarP.addEventListener("click", function(){
        if(padraoP.test(txtInfoP.value)){
            alert("Padrão P válido");
        }else{
            alert("Padrão P inválido")
        }
    });

    // q) Números de 1 a 100
    var padraoQ = /^(100|[1-9]|\d{2})$/;

    var txtInfoQ = document.getElementById("txtInfoQ");
    var btnValidarQ = document.getElementById("btnValidarQ");

    btnValidarQ.addEventListener("click", function(){
        if(padraoQ.test(txtInfoQ.value)){
            alert("Padrão Q válido");
        }else{
            alert("Padrão Q inválido")
        }
    });

    // r) Placa de carro (padrão Mercosul) quatro letras e três números (LLL-NLNN)
    var padraoR = /^$/;

    var txtInfoR = document.getElementById("txtInfoR");
    var btnValidarR = document.getElementById("btnValidarR");

    btnValidarR.addEventListener("click", function(){
        if(padraoR.test(txtInfoR.value)){
            alert("Padrão R válido");
        }else{
            alert("Padrão R inválido")
        }
    });

    // s) Palavras contendo vogais e/ou algumas dessas letras: “b”, “c”, “d”. Ex:“dado”, “caco”
    var padraoS = /^$/;

    var txtInfoS = document.getElementById("txtInfoS");
    var btnValidarS = document.getElementById("btnValidarS");

    btnValidarS.addEventListener("click", function(){
        if(padraoS.test(txtInfoS.value)){
            alert("Padrão S válido");
        }else{
            alert("Padrão S inválido")
        }
    });

    /* t) O faturamento de uma empresa. O valor poderá variar de R$0,00 até R$999.999.999.999,99 (999 bilhões de reais). 
    Exemplos válidos: R$400,8; R$400,85; R$1.500,41; R$1.500,7; R$5.601.478,10; R$10.524.478.967,70 */
    var padraoT = /^$/;

    var txtInfoT = document.getElementById("txtInfoT");
    var btnValidarT = document.getElementById("btnValidarT");

    btnValidarT.addEventListener("click", function(){
        if(padraoT.test(txtInfoT.value)){
            alert("Padrão T válido");
        }else{
            alert("Padrão T inválido")
        }
    });

    // u) Número de matrícula: IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy. Onde x é um dígito e y um caracter alfanumérico
    var padraoU = /^$/;

    var txtInfoU = document.getElementById("txtInfoU");
    var btnValidarU = document.getElementById("btnValidarU");

    btnValidarU.addEventListener("click", function(){
        if(padraoU.test(txtInfoU.value)){
            alert("Padrão U válido");
        }else{
            alert("Padrão U inválido")
        }
    });

    /* v) Número de matrícula. Único formato permitido: MT-xx.xxx-IFTM. 
    Onde x deverá um dígito, as letras MT deverão ser maiúsculas e as letras IFTM poderão ser tanto maiúsculas quanto minúsculas. */
    var padraoV = /^$/;

    var txtInfoV = document.getElementById("txtInfoV");
    var btnValidarV = document.getElementById("btnValidarV");

    btnValidarV.addEventListener("click", function(){
        if(padraoV.test(txtInfoV.value)){
            alert("Padrão V válido");
        }else{
            alert("Padrão V inválido")
        }
    });

    /* w) Número de matrícula. Único formato permitido: MT-xx.xxx-IFTM Y. 
    Onde x é um dígito, as letras do padrão poderão ser tanto maiúsculas quanto minúsculas e entre as letras poderá haver 
    no máximo um espaço em branco (ou seja, pode ser que não tenha nenhum) e Y é o nome de um dos seguintes campi 
    UBERLÂNDIA CENTRO ou UBERLÂNDIA (A primeira letra do nome/sobrenome de cada campus deve ser maiúscula e as demais minúsculas). */
    var padraoW = /^$/;

    var txtInfoW = document.getElementById("txtInfoW");
    var btnValidarW = document.getElementById("btnValidarW");

    btnValidarW.addEventListener("click", function(){
        if(padraoW.test(txtInfoW.value)){
            alert("Padrão W válido");
        }else{
            alert("Padrão W inválido")
        }
    });

})
