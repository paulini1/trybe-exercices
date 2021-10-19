const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassTech(event){
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech'); // remove a classe tech.
    event.target.classList.add('tech'); // adiciona a classe tech
    input.value =' ' //seta input para vazio;
}
firstLi.addEventListener('click',addClassTech);
secondLi.addEventListener('click',addClassTech);
thirdLi.addEventListener('click',addClassTech);
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function chanceText(event){
    const techElement = document.querySelector('.tech');
    techElement.innerText = input.value;
}
input.addEventListener('input',chanceText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function doubleClick(event){
window.location.href ='https://www.youtube.com/watch?v=5qap5aO4i9A';
}
myWebpage.addEventListener('dblclick',doubleClick);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function mouseOver (event){
    myWebpage.style.color ='red';
}
myWebpage.addEventListener('mouseover',mouseOver);

function mouseOut(){
    myWebpage.style.color = 'white';
}
myWebpage.addEventListener('mouseout',mouseOut);
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.