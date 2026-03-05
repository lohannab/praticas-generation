import readlinesync = require("readline-sync");

const numeros = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);


let numero = readlinesync.questionInt("Digite o número que você deseja encontrar: ");

if (numeros.has(numero)) {
    console.log("O número " + numero + " foi encontrado!");
} else {
    console.log("O número " + numero + " não foi encontrado!");
}