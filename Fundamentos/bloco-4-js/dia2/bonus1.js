//ordenar array number em ordem crescente.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function sortfunction (a, b){ //https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores
return a - b;                 //cria função e bota os seguintes paramêtros que faz ela ser ordenada de ordem cresce.
}numbers.sort(sortfunction);
console.log(numbers); //array será ordenado de ordem crescente