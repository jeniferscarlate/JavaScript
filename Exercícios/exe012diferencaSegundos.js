//Dadas 2 triplas inteiras representando horários (horas; min.; seg.), computar a diferença entre eles em segundos. 

var hora = parseInt(process.argv[2]);
var min = parseInt(process.argv[3]);
var seg = parseInt(process.argv[4]);
var hora2 = parseInt(process.argv[5]);
var min2 = parseInt(process.argv[6]);
var seg2 = parseInt(process.argv[7]);
var diferenca = 0;

hora *= 3600;
min *= 60;
hora2 *= 3600;
min2 *= 60;

diferenca = (hora + min + seg) - (hora2 + min2 + seg2);
if(diferenca < 0){
    diferenca *= (-1);
}
console.log(diferenca);
