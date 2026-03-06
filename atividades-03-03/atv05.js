import leia from "readline-sync";

let codigoDoProduto;
console.log("1 - Cachorro quente");
console.log("2 - X-Salada");
console.log("3 - X-Bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de laranja");

let quantidade;
let custototal;

codigoDoProduto = leia.questionInt("Digite o código do produto: ");

quantidade = leia.questionInt("Digite a quantidade: ");

switch(codigoDoProduto){
    case 1:
    custototal = quantidade * 10.00;
    console.log(`Produto: Cachorro quente \nValor Total R$: ${custototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    break;
    case 2:
    custototal = quantidade * 15.00;
    console.log(`Produto: X-Salada \nValor Total R$: ${custototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    break;
    case 3:
    custototal = quantidade * 18.00;
    console.log(`Produto: X-Bacon \nValor Total R$: ${custototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    break;
    case 4:
    custototal = quantidade * 12.00;
    console.log(`Produto: Bauru \nValor Total R$: ${custototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    break;
    case 5:
    custototal = quantidade * 8.00;
    console.log(`Produto: Refrigerante \nValor Total R$: ${custototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    break;
    case 6:
    custototal = quantidade * 13.00;
    console.log(`Produto: Suco de laranja \nValor Total R$: ${custototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    break;
    default:
    console.log("Digite uma opção válida");
    break;
}