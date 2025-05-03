const prompt = require("prompt-sync")();

let NumeroMultiplicasao = Number(prompt("Digite um número:"));

    for (let ContadorM = 0;  ContadorM <= 10 ; ContadorM++)
        {
        console.log(NumeroMultiplicasao + " x " + (ContadorM) + " = " + (NumeroMultiplicasao * ContadorM))
        }
        