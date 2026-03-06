import leia from 'readline-sync';

let vetores = new Array(10);
let impares = new Array()
let pares = new Array()
let soma = 0
let media = 0

for (let i = 0; i < 10; i++) {
    vetores[i] = leia.questionInt("Digite um número: ");
}

for (let i = 0; i < 10; i++) {
if(i % 2 !== 0){
    impares.push(vetores[i]);
}
if (i % 2 === 0){
    pares.push(vetores[i])
}
soma += vetores[i]
media = soma/10


}
console.log("Elementos nos indices ímpares: "+ impares)
console.log("Elementos Pares: "+ pares)
console.log("Soma: "+ soma)
console.log("Média: "+ media)