import leia from 'readline-sync';

let idades = true;
let idade;
let totalMenores = 0;
let totalMaiores = 0;

while (idades){ idade = leia.questionInt("Digite uma idade: ")
    if (idade < 0){ idades = false}
    else if (idade < 21){
        totalMenores++
    }else if (idade > 50){
        totalMaiores++
    }
}

console.log("Total de pessoas menores de 21 anos: "+ totalMenores)
console.log("Total de pessoas maiores de 50 anos: "+ totalMaiores)
