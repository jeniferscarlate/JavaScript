//Arrays são como caixas com outras caixas dentro, que podem ser acessadas através do seu índice entre colchetes []. O primeiro índice sempre começa do 0, portanto, um array de 4 posições terá o índice de 0 a 3.

//O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, booleam...

//Realizando a criação de um array:

const arr = ['Girafa', 'Papagaio', 'Dinossauro'];

// arr.push("qualquer coisa");
// arr.push("Galinha");

console.log(arr);

// ******************************** Método 01 - Push ********************************
//permite adicionar valores no final do array.
const pushArray = ['Maçã', 'Uva', 'Morango', 'Manga'];
console.log(pushArray);

pushArray.push('Batata');
console.log(pushArray);

pushArray.push('Dragão');
console.log(pushArray);


// ******************************** Método 02 - Unshift ********************************
//permite adicionar valores no início do array.

const unshiftArray = ['vaca amarela', 'vaca azul', 'vaca rosa'];
console.log(unshiftArray);

unshiftArray.unshift('vaca verde');
console.log(unshiftArray);

unshiftArray.unshift('vaca cinza');
console.log(unshiftArray);

unshiftArray.unshift('vaca branca', 'vaca preta', 'vaca marrom');
console.log(unshiftArray);



// ******************************** Método 03 - POP ********************************
//permite remover o último valor de um array.
const popArray = ['João', 'Julio', 'Jenifer', 'José', 'Jonas'];
console.log(popArray);

popArray.pop();
console.log(popArray);


// ******************************** Método 04 - Shift ********************************
//permite remover o primeiro valor de um array.
const shiftArray = ['João', 'Julio', 'Jenifer', 'José', 'Jonas'];
console.log(popArray);

shiftArray.shift();
console.log(shiftArray);



// ******************************** Método 05 - Splice ********************************
//permite alterar o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.

const spliceArray = ['Jan', 'fev', 'abr', 'jul'];
console.log(spliceArray);

spliceArray.splice(0, 0, 'Meses: ');
console.log(spliceArray);

spliceArray.splice(3, 0, 'Mar');
console.log(spliceArray);

spliceArray.splice(5, 0, 'Mai');
console.log(spliceArray);

spliceArray.splice(6, 1, 'Jun');
console.log(spliceArray);




