//1 cria um  objeto player


let player = {
name :'Marta',
lastName : 'Silva',
age: 34,
medals : {golde : 2, silver : 3},
bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log('a jogadora ' + player.name +' '+ player.lastName + ' tem ' +player.age +' '+ 'anos de idades');
//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
console.log(' A jogadora' + player.name + ' '+ player.lastName + ' ' + 'foi eleita por '+ player.bestInTheWorld.length + ' ' + 'a melhor jogadora do mundo');
//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(' A jogadora possui '+ player.medals.golde + ' de ouro e '+ player.medals.silver + ' de prata');
 

//FOR IN
//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for(let key in names){
      console.log('Olá ' + names[key]);
  }
 
  //2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car){
      console.log (key, car[key]);
  }

  //Funções
  