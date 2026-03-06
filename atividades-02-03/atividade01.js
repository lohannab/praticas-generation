let salario;
let abono;
let novoSalario;

const leia = require("readline-sync");

salario = leia.questionInt("Digite o salário: ");

abono = leia.questionInt("Digite o abono: ");

novoSalario = salario + abono;

console.log("O novo salário é: " + novoSalario);