//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let contador =0;
for(let index = 0 ; index < numbers.length ; index += 1) {
    
  resultado =numbers[index] + resultado ;
  contador = numbers.length;
}console.log("Soma de todos os números do array: " + resultado);
console.log("Média aritmética :" + resultado/contador);
if(resultado/contador > 20){
    console.log("Valor maior que 20")
}else{
    console.log("Valor menor que 20.");
}