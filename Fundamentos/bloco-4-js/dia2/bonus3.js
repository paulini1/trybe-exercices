//multiplicar o primeiro numero do array com o segundo numero e assim sucessivamente.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array1 = [];

for(let index = 0; index < numbers.length ; index += 1){
    if(numbers[index] === numbers[numbers.length -1]){
        array1.push(numbers[index] * 2);
    }else{
        array1.push(numbers[index] * numbers[index +1]);
    }
}
console.log(array1);