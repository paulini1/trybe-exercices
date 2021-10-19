//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const createH1 = document.createElement('h1');
createH1.innerText = "Exercício 5.2 - JavaScript DOM";
createH1.className ='title'; //Adicione a classe title na tag h1 criada;
const body = document.querySelector('body');
body.appendChild(createH1);
 
//Adicione a tag main com a classe main-content como filho da tag body ;
const createMain = document.createElement('main');
createMain.className = 'main-content';
body.appendChild(createMain);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const createSection = document.createElement('section');
createSection.className = 'center-content';

createMain.appendChild(createSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const createP = document.createElement('p');
createP.innerText = "A julia vai convencer o papai dela a comprar um ps4.";
createSection.appendChild(createP);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const createSectionLeft = document.createElement('section');
createSectionLeft.className = 'left-content';
createMain.appendChild(createSectionLeft);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const createSectionRight = document.createElement('section');
createSectionRight.className = 'right-content';
createSectionRight.style.marginRight = 'auto';
createMain.appendChild(createSectionRight);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const createImg = document.createElement('img');
createImg.className = "small-image";
createImg.setAttribute('src', 'https://picsum.photos/200');
createSectionLeft.appendChild(createImg);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const createUl = document.createElement ('ul');
createSectionRight.appendChild(createUl);
const arrayPorExtenso = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];
for(let index =0; index < arrayPorExtenso.length ; index +=1){
    const elementLi = document.createElement('li');
    elementLi.innerText = arrayPorExtenso[index];
    createUl.appendChild(elementLi);
}
for(let index = 1; index<=3;index+=1){
  const elementH3 = document.createElement('h3');
  elementH3.className = 'description';
  elementH3.innerHTML= index;
  createMain.appendChild(elementH3);
}

createMain.removeChild(createSectionLeft);

const sectiongreen = document.getElementsByClassName('center-content')[0];
sectiongreen.parentNode.style.backgroundColor='green';

createUl.lastChild.remove();
createUl.lastChild.remove();