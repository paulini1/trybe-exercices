//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const createH1 = document.createElement('h1');
createH1.innerText = "Exercício 5.2 - JavaScript DOM";
const body = document.querySelector('body');
body.appendChild(createH1);