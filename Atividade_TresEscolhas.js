const prompt = require("prompt-sync")();

let Cor = (prompt("Escolha entre essas três cores azul, vermelho e amarelo:"));
        
switch(Cor)
        {
            case "azul":
                console.log("Cor escolhida azul")
                break
                case "vermelho":
                    console.log("Cor escolhida vermelho")
                    break
                    case "amarelo":
                        console.log("Cor escolhida amarelo")
                        break
                        default: console.log("Escolha invalida, as posibilidades são unicamente azul, vermelho e amarelo(sem nenhum espasso ou letra maiuscula)")
        }
