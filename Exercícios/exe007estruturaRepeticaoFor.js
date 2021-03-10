var i;
var carros = ["Sandeiro", "Gol", "Polo", "Corola", "Savero"];

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
