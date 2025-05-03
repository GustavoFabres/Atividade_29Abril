const prompt = require("prompt-sync")();

let Numero1 = Number(prompt("Digite um número:"));
let Numero2 = Number(prompt("Digite um outro número:"));

if (Numero1 > Numero2) console.log(Numero2 + " , " + Numero1)
    else if (Numero1 < Numero2) console.log(Numero1 + " , " + Numero2)
    else if (Numero1 = Numero2) console.log("Desculpa mas não aceitamos números iguais") 
    else console.log("Só são permitidos números")




