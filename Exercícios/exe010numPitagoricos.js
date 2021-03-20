/* Construa um algoritmo para verificar se 3 números são pitagóricos. Três números são pitagóricos se o quadrado do maior deles (hipotenusa) é igual a soma do quadrado dos outros dois. Como saída de seu programa imprimir: se pitagóricos, o valor 1 e o valor da hipotenusa ao quadrado; se não pitagórico, apenas o valor 0.
Os números são denominados pitagóricos por corresponderem a comprimentos de lados de um triângulo retângulo, ou seja, h² = a² + b² */

var num1 = 9;
var num2 = 40;
var num3 = 41;
var hipo1 = 0;
var hipo2 = 0;
var hipo3 = 0;

hipo1 = (num1 * num1);
hipo2 = (num2 * num2);
hipo3 = (num3 * num3);

if(num1 >= num2 && num1 >= num3 && hipo1 === (hipo2 + hipo3) ){
    console.log("1", hipo1);
}
else{
    if(num2 >= num1 && num2 >= num3 && hipo2 === (hipo1 + hipo3)){
        console.log("1", hipo2);
    }
    else {
        if(num3 >= num1 && num3 >= num2 && hipo3 === (hipo1 + hipo2)){
            console.log("1", hipo3);
        }
        else{
            console.log("0");
        }
        
    }
}

