import leia from 'readline-sync';

let idade
let identidadeDeGênero 
let pessoaDesenvolvedora 
let continuar = false
let devBack = 0
let mulheresFront = 0
let homensMob40mais = 0
let naoBinariosFullStack30menos =0
let totalPesquisa = 0
let mediaIdade = 0
let somaIdades = 0

continuar = leia.keyInYN("Deseja fazer a pesquisa? ")

while (continuar){
idade = leia.questionInt("Idade: ")
if(idade < 14 || idade > 100 ){
    console.log("Insira uma idade válida")
}else{
identidadeDeGênero = leia.questionInt("1 - Mulher Cis \t\t 2 - Homem Cis \n3 - Não Binário \t 4 - Mulher Trans \n5 - Homem Trans \t 6 - Outros \nIdentidade de Gênero: ")
if(identidadeDeGênero < 1 || identidadeDeGênero > 6){
    console.log("Insira uma opção válida")    
}else{
pessoaDesenvolvedora = leia.questionInt ("1 - Backend \t2 - FrontEnd \n3 - Mobile \t4 - FullStack \nPessoa Desenvolvedora: ")
if(pessoaDesenvolvedora < 1 || pessoaDesenvolvedora > 4){
    console.log("Insira uma opção válida")
}else{
continuar = leia.keyInYN("Deseja continuar?(S/N")
if (pessoaDesenvolvedora === 1 ){devBack++}
if ((identidadeDeGênero === 1 || identidadeDeGênero === 4) && pessoaDesenvolvedora === 2){mulheresFront++}
if ((identidadeDeGênero === 2 || identidadeDeGênero === 5) && pessoaDesenvolvedora === 3 && idade > 40 ){homensMob40mais++}
if (identidadeDeGênero === 3 && pessoaDesenvolvedora === 4 && idade < 30){naoBinariosFullStack30menos++}
if (idade > 14 ){totalPesquisa++}
if (totalPesquisa>0){
    somaIdades +=idade;
    mediaIdade = somaIdades / totalPesquisa;
}
}
}
}
}

console.log("Total de pessoas desenvolvedoras Backend: "+ devBack)
console.log("Total de Mulheres Cis e Trans desenvolvedoras FrontEnd: "+ mulheresFront)
console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: "+ homensMob40mais)
console.log("Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: "+naoBinariosFullStack30menos)
console.log("O número total de pessoas que responderam a pesquisa: "+ totalPesquisa)
console.log("A média de idade das pessoas que responderam a pesquisa: "+ mediaIdade )




//quase fiquei louca nesse aqui kkkkkkkkkkkkk socorroDeus.mp3
//se vc ver isso comenta sem me expor kakaka vlw prof! capivaraEmEvolução.exe >> carregando >> 2%