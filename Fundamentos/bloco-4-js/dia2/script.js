// MEgasena
let PauliniGame = [7, 21,06,52,5,8];
//Sorteou os numeros
let primeiroNumero= Math.floor(Math.random() * 60) + 1;
let secundoNumero= Math.floor(Math.random() * 60) + 1;
let thirdNumber= Math.floor(Math.random() * 60) + 1;
let fourthNumber= Math.floor(Math.random() * 60) + 1;
let fifthNumber= Math.floor(Math.random() * 60) + 1;
let sixNumber= Math.floor(Math.random() * 60) + 1;

//Armazenou os Numeros Sorteados
let megaSenaNumber=[primeiroNumero,secundoNumero,thirdNumber,fourthNumber,fifthNumber,sixNumber];

//Conferir o jogo
let NumberOfHits = 0;

for(let index = 0;index < PauliniGame.length; index = index +1){
    //Esse código será repetido N vezes
    let drawnNumber = megaSenaNumber[index];

    for(let gameIndex = 0; gameIndex < PauliniGame.length; gameIndex +=1){
        console.log(drawnNumber + '; ' + PauliniGame);
        var pauliniNumero= PauliniGame[gameIndex];

        if (drawnNumber === PauliniGame ){
            numberOfHits = numberOfHits + 1;
        }
    }

}
console.log("jogo da mega sena: " + megaSenaNumber);
console.log ('jogo do paulini ; ' + PauliniGame);
console.log ('acertou : ' + numberOfHits);