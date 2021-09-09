//multiplicar o primeiro numero do array com o segundo numero e assim sucessivamente.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array1 = [];
let array2 = [];
let resultado =0
for(let index = 0 ; index < numbers.length ; index += 1){
    
        
        resultado = numbers[index] * numbers[index +1]
        
    
    
    array1.push(resultado)
        

    
}

console.log(array1)