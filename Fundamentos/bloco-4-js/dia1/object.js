let person ={
nome: 'Guilherme',
sobreNome:'paulini',
age: 19,
canDrive :true,
movies:['A Origem','A Procura da Felicidade'],
favoriteNumbers:[8,6],
address: {
    street: 'rua XYZ',
    number: 241,
    city: 'Charqueadas'
}
}
//Existem duas notações para acessar propriedades (chaves) de um objeto.
//1. Notação por ponto(Dot notation) => object.property
// console.log(person.sobreNome);

//2. Notação de colchetes (Bracket notation) =>Object ['propriedade']
 // console.log(person['sobreNome']);

// for(let key in person){
  //  console.log(key);
    // console.log(person[key]);
  //  person.favoriteAlbums=['let it be','abbey road'];

    person['favoriteColor'] = 'azul';
    console.log(person);
