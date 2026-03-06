import leia from 'readline-sync';

let nomeDoColaborador;
let codigoDoColaborador;
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Tecnico de TI");
let salario;
let novoSalariox;

nomeDoColaborador = leia.question("Digite o nome do colaborador: ");
codigoDoColaborador = leia.questionInt("Digite o código do colaborador: ");
salario = leia.questionFloat("Digite o salário do colaborador: ");

switch(codigoDoColaborador){
case 1:
    novoSalario = salario * 1.10;
    console.log(`Colaborador: ${nomeDoColaborador} \cargo: Gerente \nSalário: R$ ${(novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}`);
    break;
case 2:
    novoSalario = salario * 1.07;
    console.log(`Colaborador: ${nomeDoColaborador} \cargo: Vendedor \nSalário: R$ ${(novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}`);
    break;
case 3:
    novoSalario = salario * 1.09;
    console.log(`Colaborador: ${nomeDoColaborador} \cargo: Supervisor \nSalário: R$ ${(novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })  )}`);
    break;
case 4:
    novoSalario = salario * 1.06;
    console.log(`Colaborador: ${nomeDoColaborador} \cargo: Motorista \nSalário: R$ ${(novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}`);
    break;
case 5:
    novoSalario = salario * 1.05;
    console.log(`Colaborador: ${nomeDoColaborador} \cargo: Estoquista \nSalário: R$ ${(novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}`);   
    break;
case 6:
    novoSalario = salario * 1.08;
    console.log(`Colaborador: ${nomeDoColaborador} \cargo: Tecnico de TI \nSalário: R$ ${(novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}`);
    break;
default:
    console.log("Digite uma opção válida");
    break;
}