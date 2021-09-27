//Adiciona tag h1 com texto, filho de body
let createH1 = document.createElement('h1');
createH1.innerText="Exercicio 5.2 - JavasCript Dom";
document.body.appendChild(createH1);
//Adiciona a tag main com classe, filha de body
let createMain = document.createElement('main');
createMain.className="main-content";
document.body.appendChild(createMain);
//adiciona a tag section comm classe, filha de main.
let createSection = document.createElement('section');
createSection.className ="center-content";
document.body.appendChild(createSection);
//Adiciona tag P, com texto, filha da section.
let createP = document.createElement('p');
createP.innerText ="Testando o DOM. estou ficando bom nisso.";
createSection.appendChild(createP);
//Adiciona tag section com classe filha da main.
let section2 = document.createElement('section');
section2.className ="left-content";
createMain.appendChild(section2);
//adiciona tag section com classe right-content, filha da main.
let section3 = document.createElement('section');
section3.className = 'right-content';
createMain.appendChild(section3);
//dicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let createImg = document.createElement('img');
createImg.src = "https://picsum.photos/200";
createImg.className = "small-image";
section2.appendChild(createImg);
//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let createUl = document.createElement('ul');
section3.appendChild(createUl)

let arrayNumbers = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];
for( let num in arrayNumbers){
    let createLi= document.createElement('li');
    createLi.innerHTML = arrayNumbers[num];
    createUl.appendChild(createLi);
}
//adicione 3 tag h3, todas filhas de createMain
let h31 = document.createElement('h3');
h31.innerText ="Salve sALVE FAMILIA";
createMain.appendChild(h31);
h31.className = 'description';

let h32 = document.createElement('h3');
h32.innerText = "Aqui qm fala é o flow";
createMain.appendChild(h32);
h32.className = 'description';

let h33 = document.createElement('h3');
h33.innerText = "O melhor podcast";
createMain.appendChild(h33);
h33.className = 'description';

createH1.className = 'title';

createMain.removeChild(section2);

const sectionRightContent = document.getElementsByClassName('center-content')[0];
sectionRightContent.getElementsByClassName.marginRight ='auto';

createMain.style.backgroundColor ='green';

createUl.lastChild.remove();
createUl.lastChild.remove();