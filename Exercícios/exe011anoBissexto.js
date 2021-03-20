/*Leia um número inteiro representando um ano e determine se este ano é bissexto. Caso ele seja bissexto, imprima "ano bissexto", caso contrário, "ano nao Bissexto".
A regra para determinar se um ano é bissexto é a seguinte:
Os anos bissextos são múltiplos de 4 e não múltiplos de 100 (1900 não é bissexto - pois apesar de múltiplo de 4 também o é de 100).
Caso seja múltiplo de 100, ele deverá ser também por 400 (2000 é bissexto).*/


var ano = parseInt(process.argv[2]);

if(ano % 4 === 0 && ano % 100 != 0){
    console.log("ano bissexto");
}
else{
    if(ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0){
        console.log("ano bissexto");
    }
    else{
        console.log("ano nao bissexto");
    }
}

