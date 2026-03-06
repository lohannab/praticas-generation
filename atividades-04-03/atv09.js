import leia from 'readline-sync';

let matriz = new Array(3);
let principal = ""
let secundaria = ""
let somaPrincipal = 0
let somaSecundaria = 0

for (let iL = 0; iL < matriz.length; iL++){
    matriz[iL] = Array(3);
}

for (let iL = 0; iL < matriz.length; iL++){
  
    for (let iC = 0; iC < matriz.length; iC++){
      
      matriz[iL][iC] = leia.questionInt(`Digite o numero do elemento [${iL}][${iC}]: `);
  
    
    
    if (iL === iC){ 
        principal += matriz[iL][iC]+""
    somaPrincipal += matriz[iL][iC]

    }
    if (iL + iC === 2){
        secundaria+= matriz[iL][iC]+""
    somaSecundaria += matriz[iL][iC] 
    }
    }
}

console.log("Elementos da Diagonal Principal: "+principal);
console.log("Elementos da Diagonal Secundária: "+secundaria);
console.log("Soma dos elementos da Diagonal Principal: "+somaPrincipal);
console.log("Soma dos elementos da Diagonal Secundária: "+somaSecundaria);

  

// to quase ligando pro 188 <o> kkkkkkkkkkk