import read from 'readline-sync'

let numero1
let numero2
let operacao

numero1 = read.questionInt("Digite o primeiro numero: ")
numero2 = read.questionInt("Digite o segundo numero: ")
operacao = read.question("Digite a operação (+, -, *, /): ")
if (operacao == "+") {
    console.log("O resultado da soma é: " + (numero1 + numero2))
} else if (operacao == "-") {
    console.log("O resultado da subtração é: " + (numero1 - numero2))
} else if (operacao == "*") {
    console.log("O resultado da multiplicação é: " + (numero1 * numero2))
} else if (operacao == "/") {
    if (numero2 != 0) {
        console.log("O resultado da divisão é: " + (numero1 / numero2))
    } else {
        console.log("Não é possível dividir por zero!")
    }
}
