//ordenar array number em ordem crescente.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function sortfunction (a, b){ //https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores
return b- a; //ordem decrescente.                 
}numbers.sort(sortfunction);
console.log(numbers); 