function multiplicacao(p1, p2){
    console.log("funcrion multiplicacao executada");
    return p1 * p2;
}

function saudacao(nome){
    console.log("Olá", nome, "seja bem vinda!");
}

function functionSemParametro(){
    var a = 2;
    var b = 3;
    console.log(a + b);
}

var resultado = multiplicacao(6, 7);
console.log(resultado);
console.log(multiplicacao(3, 4));

saudacao("Jenifer");

functionSemParametro();