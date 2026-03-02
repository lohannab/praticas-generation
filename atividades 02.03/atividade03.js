// let salarioBruto = 2000.00    
// let adicionalNoturno = 500.00;
// let horasExtras = 100.00;
// let descontos = 200.00;
// let salarioLiquido;

// salarioLiquido = salarioBruto + adicionalNoturno + horasExtras *5 - descontos;
// console.log("O salário líquido é: " + salarioLiquido);

// ou ainda

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;
let numeroDeHorasExtras;

const leia = require("readline-sync");
salarioBruto = leia.questionFloat("Digite o salário bruto: ");
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
horasExtras = leia.questionFloat("Digite o valor das horas extras: ");
numeroDeHorasExtras = leia.questionInt("Digite o número de horas extras: ");
descontos = leia.questionFloat("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + horasExtras *numeroDeHorasExtras - descontos;
console.log("O salário líquido é: " + salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));