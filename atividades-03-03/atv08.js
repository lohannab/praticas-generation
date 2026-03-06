import leia from 'readline-sync';

let codigoOperacao =  leia.questionInt("Digite o código da operação desejada: \n1 - Saldo \n2 - Saque \n3 - Depósito \n");
let saldo = 1000.00;

switch (codigoOperacao) {
    case 1:
        console.log("Operação - Saldo" + "\nSaldo: R$ " + saldo);
        break;
    case 2:
        let saque = leia.questionFloat("Digite o valor do saque: R$ ");
        if (saque > saldo) {
            console.log("Operação - Saque" + "\nSaldo insuficiente!")
        } else {
            let novoSaldo = saldo - saque;
            console.log("Operação - Saque" + "\nSaldo: R$ " + novoSaldo);
        }
        break;
    case 3:
        let deposito = leia.questionFloat("Digite o valor do depósito: R$ ");
        let novoSaldo = saldo + deposito;
        console.log("Operação - Depósito" + "\nSaldo: R$ " + novoSaldo);
        break;
    default:
        console.log("Operação inválida!");
} 


// no exercicio pedia que se estivesse fora de 1-4 fosse invalido, mas tbm pede que dê a entrada 4 + valor, dai eu fiquei confusa.