/**
 * Problema: Dada a posição da rainha e a posição da peça oponente, devemos verificar se a rainha pode
 * não pode atacar essa peça oponente.
 * obs: nao iremos efetivamente movimentar a rainha, apenas verificar se o ataque é possível.
 */
// POsição original da rainha
let queenRowPosition = 6; //linha posição rainha
let queenColumnPosition = 4; //coluna posição rainha

let opponentRowPosition = 2; //Linha peça oponente
let opponentColumnPosition = 4; //Coluna peça oponente
//Posição da peça oponente.

//Alguma variável que armazene se é possível ou não ocorrer o ataque
let canAttack = false;

//Cálculo para entender se o ataque pode ser realizado.

// se a rainha esta na mesma linha que a peça oponente Ou a rainha está na mesma coluna que a peça oponente
//significa que o ataque pode ser realizado!

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition){
    canAttack =true;
    console.log('pode atacar na mesma linha ou coluna;')
}

//Identificar se a peça oponente está na diagonal superior direita
for (let upperRight = 1; upperRight < 8; upperRight += 1){
let currentQueenRow = queenRowPosition + upperRight;
let currentQueenColumn = queenColumnPosition + upperRight;

//Se a posição da linha for maior que 8 OU a posição da coluna for maior que 8 eu tenho que parar o loop
if(currentQueenRow > 8 || currentQueenColumn > 8){
    break;
}
//Se a linha atual da rainha E a coluna atual da rainha estiverem na mesma poisição que a peça oponente, significa que ela pode atacar
if(currentQueenRow === opponentRowPosition && currentQueenCOlum === opponentColumnPosition){
    canAttack =true;
    console.log('pode atacar na diagonal superior direita!');
}
console.log(currentQueenRow,  currentQueenColumn)
}

//Identificar se a peça oponenta está na diagonal inferior esquerda
for(let lowerLeft =1; lowerLeft<8; lowerLeft +=1){
    let currentQueenRow = queenRowPosition - lowerLeft ;
    let currentQueenColumn =  queenColumnPosition - lowerLeft;

    // SE a linha atual da rainha for igual a zero OU a coluna atual for igual a zero eu paro o loop
    if(currentQueenColumn ===0 || currentQueenRow == 0){
        
    }
}

//Identificar se a peça oponente está na diagonal inferior direita

//Identificar se a peça oponenta está na diagonal superior esquerda

console.log('Pode atacar? ' + canAttack);