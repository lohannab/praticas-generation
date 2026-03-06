import leia from 'readline-sync';

let numeros  = true;
let soma = 0
let numero 
let media = 0
let totalMultiplo = 0 
do {
    numero = leia.questionInt("Digite um número: ");
    if (numero !== 0 && numero % 3 === 0 ){ 
        totalMultiplo++
        soma += numero
        media = soma/totalMultiplo
    }

    if (numero === 0) {
        console.log("A média de todos os númemros múltiplos é: "+ media);
        break
    }

}while(numeros);