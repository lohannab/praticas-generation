import leia from 'readline-sync';

let vetores = [2,5,1,3,4,9,7,8,10,6];
let numero;
let i = 0

numero = leia.questionInt("Digite o número que você deseja encontrar: ");

do{  
if (numero === vetores[i]){
    console.log("O número "+numero+"está localizado na posição: "+i)
    break
}
i++


}while(i < vetores.length)

    if (numero !== vetores[i])
    console.log("O número "+ numero+ " não foi encontrado!");