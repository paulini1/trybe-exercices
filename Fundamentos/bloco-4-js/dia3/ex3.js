let n=5; 
let asterisco ="*"; 
let espaco = "";
let inputPosition = n;
for(let index1 =0 ; index1 <= n ; index1 +=1  ){
    for(let index =0 ; index <= n; index += 1){
        if(index < inputPosition){
            espaco = espaco + ' ';
        }else{
            espaco = espaco + asterisco;
        }
    } console.log(espaco);
    espaco ='';
    inputPosition -=1;
}

