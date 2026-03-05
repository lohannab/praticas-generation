import readlinesync = require("readline-sync"); 

const numeros = new Set<number> ();

for (let i=0 ; i<10; i++){
let numero = readlinesync.questionInt("Escreva um número: ");
numeros.add(numero)
}

console.log("Listar dados do Set:");

let resultado = Array.from(numeros);

resultado.sort((a,b)=>a-b);

for (let numero of resultado){
    console.log(numero);
}