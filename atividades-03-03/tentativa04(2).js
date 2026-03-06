import leia from 'readline-sync';

let vertebrado 
let invertebrado
let ave
let mamifero
let carnivoro
let onivoro
let herbivoro
let aguia
let pomba
let homem
let vaca
let inseto
let anelideo
let hematofago
let pulga
let lagarta
let sanguessuga
let minhoca


vertebrado = [ave, mamifero]
invertebrado = [inseto, anelideo]

ave = [ carnivoro, onivoro]
mamifero = [onivoro, herbivoro]

carnivoro = [aguia]
onivoro = [pomba, homem]
herbivoro = [vaca]

inseto = [hematofago, herbivoro]
anelideo = [hematofago, onivoro]

hematofago = [pulga, sanguessuga]
herbivoro = [lagarta]
onivoro = [minhoca]

let resposta1 = leia.question("Vertebrado ou Invertebrado? ")
let resposta2 = leia.question("Ave, Mamífero, Inseto ou Anelídeo? ")
let resposta3 = leia.question("Carnívoro, Onívoro ou Herbívoro? ")


if (vertebrado && ave && carnivoro) {
    console.log("O animal é: Águia")
}
if (vertebrado && ave && onivoro) {
    console.log("O animal é: Pomba")
} 
if (vertebrado && mamifero && onivoro) {
    console.log("O animal é: Homem")
}
if (vertebrado && mamifero && herbivoro) {
    console.log("O animal é: Vaca")
}
if (invertebrado && inseto && hematofago) {
    console.log("O animal é: Pulga")
}
if (invertebrado && inseto && herbivoro) {
    console.log("O animal é: Lagarta")
}
if (invertebrado && anelideo && hematofago) {
    console.log("O animal é: Sanguessuga")
}
if (invertebrado && anelideo && onivoro) {
    console.log("O animal é: Minhoca")
}
else {
    console.log("Opção inválida")
}


nao consegui fazer a questão, tentei de várias formas, mas não consegui chegar a uma solução. Deixei o código comentado para futura visualização.