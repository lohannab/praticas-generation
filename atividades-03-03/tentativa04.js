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

console.log("Escolha uma das opções abaixo: ")
console.log("1 - Vertebrado")
console.log("2 - Invertebrado")
let resposta1 = leia.questionInt("Digite o número da opção: ")
if (resposta1 == 1) {
    console.log("Escolha uma das opções abaixo: ")
    console.log("1 - Ave")
    console.log("2 - Mamífero")
    let resposta2 = leia.questionInt("Digite o número da opção: ")
    if (resposta2 == 1) {
        console.log("Escolha uma das opções abaixo: ")
        console.log("1 - Carnívoro")
        console.log("2 - Onívoro")
        let resposta3 = leia.questionInt("Digite o número da opção: ")
        if (resposta3 == 1) {
            console.log("O animal é: Águia")
        } else if (resposta3 == 2) {
            console.log("O animal é: Pomba")
        }
    } else if (resposta2 == 2) {
        console.log("Escolha uma das opções abaixo: ")
        console.log("1 - Onívoro")
        console.log("2 - Herbívoro")
        let resposta4 = leia.questionInt("Digite o número da opção: ")
        if (resposta4 == 1) {
            console.log("O animal é: Homem")
        } else if (resposta4 == 2) {
            console.log("O animal é: Vaca")
        }
    } else if (resposta1 == 2) {
        console.log("Escolha uma das opções abaixo: ")
        console.log("1 - Inseto")
        console.log("2 - Anelídeo")
        let resposta5 = leia.questionInt("Digite o número da opção: ")
        if (resposta5 == 1) {
            console.log("Escolha uma das opções abaixo: ")
            console.log("1 - Hematófago")
            console.log("2 - Herbívoro")
            let resposta6 = leia.questionInt("Digite o número da opção: ")
            if (resposta6 == 1) {
                console.log("O animal é: Pulga")
            } else if (resposta6 == 2) {
                console.log("O animal é: Lagarta")
            }
        } else if (resposta5 == 2) {
            console.log("Escolha uma das opções abaixo: ")
            console.log("1 - Hematófago")
            console.log("2 - Onívoro")
            let resposta7 = leia.questionInt("Digite o número da opção: ")
            if (resposta7 == 1) {
                console.log("O animal é: Sanguessuga")
            } else if (resposta7 == 2) {
                console.log("O animal é: Minhoca")
            } else {
                console.log("Digite uma opção válida")
            }
        }
    }
}