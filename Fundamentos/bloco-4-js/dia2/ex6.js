//Descobrir quantos numeros impares existem no array e exibir uma mensagem com o valor. Se não se não existir nenhum número ímpara, exibir uma mensagem dizendo q nao exsite numeros

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for(let index = 0; index < numbers.length ; index += 1){
    if(numbers[index] %2 !==0){
        contador+= 1;
    }
    
    }if(contador === 0){
        console.log("Nenhum número ímpar encontrado.");
    }else{
        console.log(contador);
    }



