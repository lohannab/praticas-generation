import readlinesync = require('readline-sync');

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = readlinesync.questionInt(" Digite o número que você deseja encontrar: ");

let i = 0

do{  
if (numero === numeros[i]){
    console.log("O número "+numero+"está localizado na posição: "+i)
    break
}
i++


}while(i < numeros.length)

    if (numero !== numeros[i])
    console.log("O número "+ numero+ " não foi encontrado!");