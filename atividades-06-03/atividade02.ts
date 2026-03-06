import { Stack } from "./Stack";
import readlinesync = require("readline-sync");


const pilha = new Stack<string>();
let opcao: number;
let sair = false;

console.log("\nPilha Livros:");
console.log("\n1 - Adicionar Livro na pilha");
console.log("2 - Listar todos os livros");
console.log("3 - Retirar Livro da pilha");
console.log("0 - Sair");

do {


    opcao = readlinesync.questionInt("\nDigite uma opção: ");

    switch (opcao) {
        case 1:
            const livro = readlinesync.question("\nDigite o nome: ");
            pilha.push(livro);
            console.log("\nPilha:\n")
            pilha.printStack()
            console.log(" \nLivro adicionado!");
            break;

        case 2:
            if (!pilha.isEmpty()) {
                console.log("\nLista de livros na pilha:");
                pilha.printStack();
            } else {
                console.log("\nA Pilha está vazia.");
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA pilha está vazia!")
            } else {
                console.log("\nPilha:\n")
                pilha.pop();
                pilha.printStack()
                console.log("\nUm Livro foi retirado da pilha!");
            }
            break;

        case 0:
            sair = true;
            console.log("\nPrograma Finalizado");
            break;

        default:
            console.log("\nEntre com uma opção válida.");
    }
} while (!sair)

    //dessa vez eu nao imprimi igual ao resultado da ativ, pq julgo nao ser necessario né, já que a pilha imprime assim segundo as minhas pesquisas kkk ontem eu tive que ver varios videos, chatgpt pra endenter que precisa transformar set em array pra ordenar T-T kkk 