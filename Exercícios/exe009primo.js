//Descobrir se um numero é primo ou nao;

//declarando as variaveis:
var numero = 13;
var i;
var numPrimo = true;

//processamento:
for(i=2; i<numero; i++){
    if(numero % i === 0){
        numeroPrimo = false;
        break;
    }
}
//saida:
if(numPrimo){
    console.log(" O numero ", numero, "é primo. ");
}
else{
    console.log("O numero ", numero, "não é primo. ");
}
