const prompt = require("prompt-sync")();

let Macas = Number(prompt("Digite o número de maçãs compradas:"));
let Macas30 = Macas * 0.30;
let Macas25 = Macas * 0.25;

if (Macas < 0) console.log("Número inválido")
    else if (Macas < 12) console.log("R$ " + (Macas30.toFixed(2)))
    else console.log("R$ " + (Macas25.toFixed(2)))

