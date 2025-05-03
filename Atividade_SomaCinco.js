const prompt = require("prompt-sync")();

let Numero1_5 = 0;
let NumeroSoma = 0;

for (let Contador = 0;  Contador < 5 ; Contador++)
    {
    Numero1_5 = Number(prompt("Digite um número:"));
    NumeroSoma = Numero1_5 + NumeroSoma
    }
    console.log(NumeroSoma)
    