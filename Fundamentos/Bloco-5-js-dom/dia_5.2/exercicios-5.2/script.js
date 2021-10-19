//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const createH1 = document.createElement('h1');
createH1.innerText = "Exercício 5.2 - JavaScript DOM";
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