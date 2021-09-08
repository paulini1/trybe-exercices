//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrex = "Rainha";
let peca = pecaXadrex.toLocaleLowerCase();
switch(peca){
    case "bispo":
        console.log("Diagonal.");

        break;

    case "peão":
        console.log("Frente");
        break;

    case "rainha":
        console.log("Tudo os lado");
        break;
        
        case "rei":
            console.log("uma unidade para cada lado.");
            break;

            case "cavalo":
                console.log("em L");
                break;
                
                default :
                console.log("SEilámano");


}