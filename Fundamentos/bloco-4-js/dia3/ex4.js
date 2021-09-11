//fazer pirâmide com n de base.
let n=5; 
let symbol ="*"; 
let inputLine = "";
let inputPosition = n;
let midOfMatrix = (n + 1 )/ 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;
for(let linecolumnIndex =0 ; linecolumnIndex <= midOfMatrix ; linecolumnIndex +=1  ){
    for(let columnIndex =0 ; columnIndex <= n; columnIndex += 1){
        if(columnIndex > controlLeft && columnIndex < controlRight){
            inputLine = inputLine + symbol ;
        }
        else{
            inputLine = inputLine + " ";
        }
    } console.log(inputLine);
    inputLine ='';
    controlRight += 1;
    controlLeft -= 1;
}