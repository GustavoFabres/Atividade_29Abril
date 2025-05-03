const prompt = require("prompt-sync")();

let Idade = Number(prompt("Digite sua idade:"));
 
if(Idade <= 12 & Idade >= 0 ) console.log("Crianaça")
    else if(Idade <= 17 & Idade >= 0) console.log("Adolescente")
        else if(Idade <= 64  & Idade >= 0 ) console.log("Adulto")
          else if(Idade >= 65  & Idade >= 0) console.log("Idoso")
            else console.log("Numero invalido")
        