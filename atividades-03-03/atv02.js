import leia from "readline-sync";

let numero = leia.questionInt("Digite um numero: ");

if (numero % 2 == 0 && numero > 0) {    
    console.log("O  Número" + numero + " é par e positivo!")
} else if (numero % 2 != 0 && numero < 0) {
    console.log("O  Número" + numero + " é ímpar e negativo!")
} else if (numero % 2 == 0 && numero < 0) {
    console.log("O  Número" + numero + " é par e negativo!")
} if (numero % 2 != 0 && numero > 0) {
    console.log("O  Número" + numero + " é ímpar e positivo!")
}