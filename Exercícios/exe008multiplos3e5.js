//Encontre e some os multiplos de 3 e 5 abaixo de 1000;

var multiplos = [];
var i;
var soma = 0;
var j;

for(i=3; i<1000; i++){
    if((i % 3 === 0) || (i % 5 === 0)){
        multiplos.push(i);
    }
}

for(j=0; j < multiplos.length; j++){
    soma += multiplos[j];
}
console.log(soma);