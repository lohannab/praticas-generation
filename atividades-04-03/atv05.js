import leia from 'readline-sync';

let numeros  = true;
let soma = 0
let numero 
do {
    numero = leia.questionInt("Digite um número: ");
    if (numero > 0){
        soma += numero}

    if (numero === 0) {
        console.log("A soma dos números positivos é: "+soma);
        break
    }

}while(numeros);