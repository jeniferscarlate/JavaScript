var carros = ["Gol", "Celta", "Palio", "Uno"];

// O pop() remove o ultimo elemento do array e retorna o elemento removido.
var carro = carros.pop();
console.log(carro);
console.log(carros);

// O push insere um elemento na ultima posicao do array e retorna o tamanho atualizado do array.
var x = carros.push("Ford Ka");
console.log(carros);
console.log(x);

//O shift remove o primeiro elemento do array e atualiza os outros indices.
//e se quiser ele retorna o elemento que foi removido.
var carro = carros.shift();
console.log(carro);
console.log(carros);

// O unshift insere um elemento no inicio do array e retorna o tamanho atualizado do array.
var x = carros.unshift("Onix");
console.log(carros);
console.log(x);

// Atualizar elemento do indice informado:
carros[2] = "Novo Uno";
console.log(carros);

// O delete remove o elemento do indice informado, deixando um undefined no lugar.
delete carros[2];
console.log(carros);

/* O splice permite inserir e/ou remover elementos nos idices no meio do array;
   Primeiro parametro: posicao inicial;
   segundo parametro: quabtos elementos a partir da posicao inicial;
   terceiro e demias paramentros: elementos que serao inseridos a partir da posicao inicial.
*/   
carros.splice(2, 1, "HB20", "Astra");
console.log(carros);

// O concat concatena um array em outro e retorna o novo array criado.
var carrosAntigos = ["Brasilia", "Fusca", "Monza"];
var carrosAntigos2 = ["Coecel", "Chevet", "Meriva"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
console.log(todosCarros);

/* O slice cria um novo array sem alterar o array original;
   primeiro parametro: posicao inicial;
   segundo parametro (opcional): posicao final (nao incluso);
*/
var novoArray = todosCarros.slice(1);
console.log(todosCarros);
console.log(novoArray);

var novoArray2 = todosCarros.slice(2, 5);
console.log(novoArray2);