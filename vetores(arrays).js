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
console.log(shiftArray);

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



// ******************************** Método 06 - Filter ********************************
//cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const filterArray = [1, 80, 30, 70, 2, 9289, 0];
console.log(filterArray);

const novoArray = filterArray.filter((qualquerCoisa) => {

    return qualquerCoisa > 10;
});

console.log(novoArray);



// ******************************** Método 07 - MAP ********************************
//O Map não modifica o array original, somente a função callback poderá fazer isso! Ou seja, ela criará um novo array modificado.

const arrayMap = [1, 2, 3, 4, 5];

const arrayModificado = arrayMap.map((resultado) => {
    return resultado * resultado;
})
console.log(arrayModificado);



// ******************************** Método 08 - ForEach ********************************
//executa uma dada função em cada elemento de um array.

const foreachArray = ['Carlos', 'Vitor', 'Leo', 'Pedro'];

foreachArray.forEach((nome) => {
    console.log(nome);
});



// ******************************** Método 09 - Incluides ********************************
//determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

const frutas = ['Laranja', 'Limão', 'Goiaba', 'Caju'];
console.log(frutas);

console.log(frutas.includes('Laranja'));



// ******************************** Método 10 - Sort ********************************
//ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.

const frutinhas = ['Melão', 'Abacaxi', 'Abacate', 'Framboesa', 'Amora'];
console.log(frutinhas.sort());

const numeros = [15, 27, 1003, 59, -13, 666];
console.log(numeros.sort((a, b) => a - b));






