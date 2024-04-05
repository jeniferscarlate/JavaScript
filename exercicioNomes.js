// ******************************** Exercício 01 - Nomes ********************************
//Crie 2 arrays: nome e sobrenome
//Crie um terceiro array de nomeCompleto
//ao final, exiba os nomes completos com o console com o forEach
//é necessário conter pelo menos 5 nomes
//utilizar arrow functions
//se necessário, utilize outros métodos de array.


//função de callback + novo array


const nome = ['Jenifer', 'Luan', 'Cristiano', 'Fausto', 'Gustavo'];
const sobrenome = ['Scarlate', 'Santana', 'Ronaldo', 'Silva', 'Lima'];

const nomeCompleto = nome.map((elemento, indice) => `${elemento} ${sobrenome[indice]}`);

nomeCompleto.forEach((nome) => console.log(nome));



