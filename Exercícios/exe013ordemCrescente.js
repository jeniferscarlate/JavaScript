//Dados 3 números inteiros, imprima-os em ordem crescente.
//utilizar apenas 3 variáveis, 
//pois o exercício é para treinar o funcionamento do comando if-else.

var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
var num3 = parseInt(process.argv[4]);

if(num1 <= num2 && num1 <= num3){
    if(num2 <= num3){
        console.log("A ordem é ", num1, num2, num3);
    }
    else{
        if(num3 <= num2){
            console.log("A ordem é ", num1, num3, num2);
        }
    }
}
if(num2 <= num1 && num2 <= num3){
    if(num1 <= num3){
        console.log("A ordem é ", num2, num1, num3);
    }
    else{
        if(num3 <= num1){
            console.log("A ordem é ", num2, num3, num1);
        }
    }
}
if(num3 <= num1 && num3 <= num2){
    if(num1 <= num2){
        console.log("A ordem é ", num3, num1, num2);
    }
    else{
        if(num2 <= num1){
            console.log("A ordem é ", num3, num2, num1);
        }
    }
}

