import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();
let opcao: number;
let sair = false;

console.log("\nLista de Espera:");
console.log("\n1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes na fila");
console.log("3 - Chamar Cliente da fila");
console.log("0 - Sair");

do {


    opcao = readlinesync.questionInt("\nDigite uma opção: ");

    switch (opcao) {
        case 1:
            const cliente = readlinesync.question("\nDigite o nome: ");
            fila.enqueue(cliente);
            console.log("\nFila:\n")
            fila.printQueue()
            console.log(" \nCliente adicionado!");
            break;

        case 2:
            if (!fila.isEmpty()) {
                console.log("\nLista de clientes na fila:");
                fila.printQueue();
            } else {
                console.log("\nA Fila está vazia.");
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!")
            } else {
                console.log("\nFila:\n")
                fila.dequeue();
                fila.printQueue()
                console.log("\nO cliente foi chamado!");
            }
            break;

        case 0:
            sair = true;
            console.log("Programa Finalizado");
            break;

        default:
            console.log("Entre com uma opção válida.");
    }
} while (!sair)
