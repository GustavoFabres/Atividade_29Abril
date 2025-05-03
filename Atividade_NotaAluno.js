const prompt = require("prompt-sync")();

let Nota = Number(prompt("Digite sua nota:"));
 
if(Nota <= 4 & Nota >= 0 ) console.log("Reprovado")
    else if(Nota <= 7 & Nota >= 0) console.log("Recuperação")
        else if(Nota <= 10  & Nota >= 0 ) console.log("Aprovado")
            else console.log("Nota invalida")
        