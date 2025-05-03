const prompt = require("prompt-sync")();

let N = Number(prompt("Digite um numero:"));
let resto = N % 2;
 if(resto == 0)console.log("Numero par"); 
    else console.log("Numero impar");

    
