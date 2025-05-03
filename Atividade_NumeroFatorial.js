const prompt = require("prompt-sync")();

 let NumeroFatorial = Number(prompt("Digite um número:"))

if (NumeroFatorial <= 0) console.log("Número inválido") 
    else for (let NumeroFatorialC = NumeroFatorial - 1 ;  NumeroFatorialC > 0 ; NumeroFatorialC--)
        {
        let NumeroFatorialD = NumeroFatorial * NumeroFatorialC
        console.log(NumeroFatorial + " x " + NumeroFatorialC + " = " + NumeroFatorialD)
        NumeroFatorial = NumeroFatorialD
        }
        