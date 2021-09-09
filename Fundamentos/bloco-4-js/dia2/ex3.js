//média aritimética de numeros do array.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let contador =0;
for(let index = 0 ; index < numbers.length ; index += 1) {
    
  resultado =numbers[index] + resultado ;
  contador = numbers.length;
}console.log("Soma de todos os números do array: " + resultado);
console.log("Média aritmética :" + resultado/contador);
