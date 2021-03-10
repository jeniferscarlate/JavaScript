var i;
var carros = ["Sandeiro", "Gol", "Polo", "Corola", "Savero"];

console.log("----------------For----------------");

// imprimindo de zero a dez:
for(i = 0; i <= 10; i++){
    console.log(i);
}
console.log("\n");

//imprimindo do começo para o final:
for(i=0; i < carros.length; i++){
    console.log(carros[i]);
}
console.log("\n");

//imprimindo do final para o começo:
for(i = carros.length-1; i >= 0; i--){
    console.log(carros[i]);
}
console.log("\n");

console.log("----------------While----------------");
i = 0;
while(i < carros.length){
    console.log(carros[i]);
    i++;
}
console.log("\n");

i=0;

while(i < carros.length){
    if(carros[i] === "Polo"){
        console.log("O carro foi encontrado");
        break;
    }
    i++;
}
console.log("\n");

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
var num = 0;

while(i < numeros.length){
    num = numeros[i];
    i++;

    if(num % 2 === 0){
        console.log(num + "e par");
        continue;
    }
    console.log(num + "e impar");

}
console.log("\n");

console.log("----------------Do-While----------------");
i = 0;

do{
    i++;
    console.log(i);
} while(i<10);

console.log("\n");

console.log("----------------For-Of----------------");

var carro = 0;

for(carro of carros){
    console.log(carro);
}