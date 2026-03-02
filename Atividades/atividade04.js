// let n1 = 5.0
// let n2 = 6.0;
// let n3 = 7.0;
// let n4 = 8.0;

// let calculo;

// calculo = (n1 * n2) -(n3*n4)
// console.log("O resultado do cálculo é: " + calculo.toFixed(1));

//OU

let n1;
let n2;
let n3;
let n4;

const leia = require("readline-sync");
n1 = leia.questionFloat("Digite o valor de n1: ");
n2 = leia.questionFloat("Digite o valor de n2: ");
n3 = leia.questionFloat("Digite o valor de n3: ");
n4 = leia.questionFloat("Digite o valor de n4: ");  

let calculo;

calculo = (n1 * n2) -(n3*n4)
console.log("Diferença: " + calculo);
