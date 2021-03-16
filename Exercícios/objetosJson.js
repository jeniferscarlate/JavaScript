var pessoa = {
    nome: "Maria",
    idade: 87,
    telefone: "(11) 4002-9822",
    temCarro: true,
    animaisDeEstimacao:["Ritinha", "bob"],

    pai: {
        nome: "joseval",
        idade: 103,
    }

}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.pai.nome);
pessoa.animaisDeEstimacao.push("Billy");
pessoa.nome += " Creuza";
console.log(pessoa);
pessoa.mae = {
    nome: "Marizette",
    idade: 102,
}    
console.log(pessoa);
console.log(JSON.stringify(pessoa));

/*function salvarDadosPessoa(pessoa){
    console.log(pessoa);
}
salvarDadosPessoa(pessoa);
*/