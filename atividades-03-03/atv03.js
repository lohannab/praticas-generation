import leia from 'readline-sync';

let nomeDoDoador;
nomeDoDoador = leia.question("Digite o nome do doador: ");
let idadeDoDoador;
idadeDoDoador = leia.questionInt("Digite a idade do doador: ");
let primeiraDoacao;
primeiraDoacao = leia.keyInYN("Primeira doação de sangue?");

if (idadeDoDoador >= 18 && idadeDoDoador < 60) {;
    console.log(nomeDoDoador +" está apto(a) para doar sangue");
} else if (idadeDoDoador >=60 && idadeDoDoador < 69 && primeiraDoacao == "N")
    console.log( nomeDoDoador + " está apto(a) para doar sangue");
    else {
        console.log( nomeDoDoador + " não é apto(a) para doar sangue");
    }