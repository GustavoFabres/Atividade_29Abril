const prompt = require("prompt-sync")();


let LadoA = Number(prompt("Digite o comprimento do lado A do triângulo:"));
    let LadoB = Number(prompt("Digite o comprimento do lado B do triângulo:"));
    let LadoC = Number(prompt("Digite o comprimento do lado C do triângulo:"));

    if((LadoA < (LadoB + LadoC)) & (LadoB < (LadoA + LadoC)) & (LadoC < (LadoA + LadoB))) 
        {
    if (((LadoA == LadoB & LadoA != LadoC) || (LadoA == LadoC & LadoA != LadoB)  || (LadoB == LadoC & LadoB != LadoA))) console.log("Triângulo isóscelis")
        else if ((LadoA == LadoB & LadoB == LadoC)) 
          {
    console.log("Triângulo equilétero") 
          }
        else if(((LadoA < LadoB || LadoA > LadoB) & (LadoB < LadoC || LadoB > LadoC))) 
          {
        console.log("Triângulo escalêno");
          }
          else  console.log("Isso não é um triângulo");
         }
     else {
        console.log("Isso não é um triângulo");
          }
        
