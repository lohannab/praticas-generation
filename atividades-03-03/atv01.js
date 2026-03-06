import leia from "readline-sync";

let numeroA;
let numeroB;
let numeroC;

numeroA = leia.questionInt("Digite o primeiro numero: ");
numeroB = leia.questionInt("Digite o segundo numero: ");
numeroC = leia.questionInt("Digite o terceiro numero: ");   

if (numeroA + numeroB > numeroC) {
    console.log("A soma A + B é maior que C")
}   
else if (numeroA + numeroB < numeroC) {
    console.log("A soma A + B é menor que C")
}
else if (numeroA + numeroB == numeroC) {
    console.log("A soma A + B é igual a C")
}