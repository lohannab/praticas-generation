import readlinesync = require("readline-sync");

const cores = new Array(5); 

for(let i = 0; i < 5; i++){
   cores[i] = readlinesync.question("Digite uma cor: ")
   
}
console.log("\nListar todas as cores: \n")
for (let i = 0; i < 5; i++){
    console.log(cores[i])
}

cores.sort()
console.log("\nOrdenar as cores: \n")
for (let i = 0; i < 5; i++){
    console.log(cores[i])
}
