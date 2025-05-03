const prompt = require("prompt-sync")();

let NumeroAritiméticoDivisao = 0;
    let NumeroAritiméticoPrincipal = 0;
    let NumeroAritimético = 0;
do{
    console.log(NumeroAritiméticoPrincipal);
    NumeroAritimético = Number(prompt("Digite um número:"));
        if (NumeroAritimético == 0) 
        {
        console.log(NumeroAritiméticoPrincipal / NumeroAritiméticoDivisao)
        }
        else
        {
            NumeroAritiméticoDivisao++ ; 
            NumeroAritiméticoPrincipal = NumeroAritiméticoPrincipal + NumeroAritimético;
             //console.log(NumeroAritiméticoPrincipal);
            //console.log(NumeroAritiméticoDivisao);
        }

} while(NumeroAritimético != 0)
    
