// Nosso jogo
​
let ericJogo = [4, 5, 10, 11, 27, 29];
​
let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondtNumber = Math.floor(Math.random() * 60) + 1;
let thirdNumber = Math.floor(Math.random() * 60) + 1;
let fourthNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;
​
let megaSena = [firstNumber, secondtNumber, thirdNumber,fourthNumber,fifthNumber,sixthNumber]
​
let numberOfHits = 0;
​
for (let index = 0; index < megaSena.length; index = index + 1) {
  let drawnNumber = megaSena[index];
​
  for (let gameIndex = 0; gameIndex < ericJogo.lenght; gameIndex += 1) {
    let ericNumber = ericJogo[gameIndex];
​
    if (drawnNumber === ericNumber) {
      numberOfHits += 1;
    }
  }
}
​
console.log('Jogo da Mega Sena:' + megaSena);
console.log('Jogo do Eric:' + ericJogo);
console.log('Ele acertou:' + numberOfHits);
