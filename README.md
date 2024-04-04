# JavaScript
Meus estudos em JavaScript

## Conhecendo alguns métodos de arrays.

*`Push`: Permite adicionar valores no final do array.
~~~js
const pushArray = ['Maçã', 'Uva', 'Morango', 'Manga'];
console.log(pushArray);
//Saída:[ 'Maçã', 'Uva', 'Morango', 'Manga' ];

pushArray.push('Batata');
console.log(pushArray);
//Saída: [ 'Maçã', 'Uva', 'Morango', 'Manga', 'Batata' ];
~~~
*`Unshift`: Permite adicionar valores no início do array.
~~~js
const unshiftArray = ['vaca amarela', 'vaca azul', 'vaca rosa'];
console.log(unshiftArray);
//Saída: [ 'vaca amarela', 'vaca azul', 'vaca rosa' ];

unshiftArray.unshift('vaca verde');
console.log(unshiftArray);
//Saída: [ 'vaca verde', 'vaca amarela', 'vaca azul', 'vaca rosa' ].
~~~
*`Pop`: Permite remover o último valor de um array.
~~~js
const popArray = ['João', 'Julio', 'Jenifer', 'José', 'Jonas'];
console.log(popArray);
//Saída: [ 'João', 'Julio', 'Jenifer', 'José', 'Jonas' ];

popArray.pop();
console.log(popArray);
//Saída: [ 'João', 'Julio', 'Jenifer', 'José' ].
~~~
*`Shift`: Permite remover o primeiro valor de um array.
~~~js
const shiftArray = ['João', 'Julio', 'Jenifer', 'José', 'Jonas'];
console.log(shiftArray);
//Saída: [ 'João', 'Julio', 'Jenifer', 'José', 'Jonas' ];

shiftArray.shift();
console.log(shiftArray);
//Saída: [ 'Julio', 'Jenifer', 'José', 'Jonas' ].
~~~
*`Splice`: Permite alterar o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.  
~~~js
const spliceArray = ['Jan', 'fev', 'abr', 'jul'];
console.log(spliceArray);
//Saída: [ 'Jan', 'fev', 'abr', 'jul' ]; 

spliceArray.splice(0, 0, 'Meses: ');
console.log(spliceArray);
//Saída: [ 'Meses: ', 'Jan', 'fev', 'abr', 'jul' ];

spliceArray.splice(3, 0, 'Mar');
console.log(spliceArray);
//Saída: [ 'Meses: ', 'Jan', 'fev', 'Mar', 'abr', 'jul' ]; 

spliceArray.splice(5, 0, 'Mai');
console.log(spliceArray);
//Saída: [ 'Meses: ', 'Jan', 'fev', 'Mar', 'abr', 'Mai', 'jul' ];

spliceArray.splice(6, 1, 'Jun');
console.log(spliceArray);
//Saída: [ 'Meses: ', 'Jan', 'fev', 'Mar', 'abr', 'Mai', 'Jun' ].
~~~
*`Filter`: Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. 
~~~js
const filterArray = [1, 80, 30, 70, 2, 9289, 0];
console.log(filterArray);
//Saída: [ 1, 80, 30, 70, 2, 9289, 0 ];

const novoArray = filterArray.filter((qualquerCoisa) => {

    return qualquerCoisa > 10;
});

console.log(novoArray);
//Saída: [ 80, 30, 70, 9289 ].
~~~
*`Map`: O Map não modifica o array original, somente a função callback poderá fazer isso! Ou seja, ela criará um novo array modificado. 
~~~js
const arrayMap = [1, 2, 3, 4, 5];

const arrayModificado = arrayMap.map((resultado) => {
    return resultado * resultado;
})
console.log(arrayModificado);
//Saída: [ 1, 4, 9, 16, 25 ].
~~~
*`ForEach`: Executa uma dada função em cada elemento de um array.  
~~~js
const foreachArray = ['Carlos', 'Vitor', 'Leo', 'Pedro'];

foreachArray.forEach((nome) => {
    console.log(nome);
});
/*Saída: 
Carlos
Vitor
Leo
Pedro
*/
~~~
*`Incluides`: Determina se um array contém um determinado elemento, retornando true ou false apropriadamente. 
~~~js
const frutas = ['Laranja', 'Limão', 'Goiaba', 'Caju'];
console.log(frutas);
//Saída: [ 'Laranja', 'Limão', 'Goiaba', 'Caju' ]; 

console.log(frutas.includes('Laranja'));
//Saída: true.
~~~
*`Sort`: Ordena os elementos do próprio array e retorna um novo array ordenado.
~~~js
const frutinhas = ['Melão', 'Abacaxi', 'Abacate', 'Framboesa', 'Amora'];
console.log(frutinhas.sort());
//Saída: [ 'Abacate', 'Abacaxi', 'Amora', 'Framboesa', 'Melão' ];

const numeros = [15, 27, 1003, 59, -13, 666];
console.log(numeros.sort((a, b) => a - b));
//Saída: [ -13, 15, 27, 59, 666, 1003 ].
~~~




