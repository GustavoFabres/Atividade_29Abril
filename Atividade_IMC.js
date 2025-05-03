const prompt = require("prompt-sync")();

let Peso = Number(prompt("Digite seu peso:"));
let Altura = Number(prompt("Digite sua altura:"));
let IMC = Peso / (Altura * Altura)
//console.log(IMC)

if (IMC < 0)console.log("Números imcompativeis")
    else if(IMC < 18.50) console.log("Baixo peso")
    else if (IMC >= 18.50 & IMC <= 24.99) console.log("Pesso normal")
    else if (IMC >= 25 & IMC <= 29.99) console.log("Sobrepeso") 
    else if (IMC >= 30) console.log("Obesidade") 
    else console.log("Números imcompativeis")

