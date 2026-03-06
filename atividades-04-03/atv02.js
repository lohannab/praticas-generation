import leia from 'readline-sync';

let numero, numerosPares, numerosImpares;
numerosPares = 0   
numerosImpares= 0

for(let i= 1; i <= 10; i++){
    numero = leia.questionInt("Digite o " + i + "º número: ");
if (numero % 2 === 0) {
    numerosPares++;
}else {
    numerosImpares++;
}
}

console.log("Total números pares: "+ numerosPares);
console.log("Total números ímpares: "+ numerosImpares)