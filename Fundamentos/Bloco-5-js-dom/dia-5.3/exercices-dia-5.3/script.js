function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercicio 1

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


  const ulDays = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const diasNumeros = dezDaysList[index];
    const liEle = document.createElement('li');
    liEle.innerHTML = diasNumeros;
    liEle.classList.add('day');
    if (diasNumeros === 25 || diasNumeros === 24 || diasNumeros === 31) {
      liEle.classList.add('holiday');
    }
     if(diasNumeros === 4 || diasNumeros === 11 || diasNumeros === 18 || diasNumeros === 25){
      liEle.classList.add('friday');
    }
    ulDays.appendChild(liEle);
  }

}
createDays();

//exercicio 2
function createHolidayButton(buttonName){
  const buttonElement = document.createElement('button');
  buttonElement.id= 'btn-holiday'; // adiciona ID ao elemento criado, neste caso o botão.
  const divButtons = document.querySelector('.buttons-container');
  buttonElement.innerHTML = buttonName;
  divButtons.appendChild(buttonElement);
}
createHolidayButton('Feriados');

//exercicio 3
function chanceColorHolydais(){
  const buttonHoliday = document.getElementById('btn-holiday');
  const holidays = document.getElementsByClassName('holiday');
  const corAtual = 'rgb(238,238,238)';
  const novaCor = 'orange';
  buttonHoliday.addEventListener('click',function(event){
    for(let index = 0 ; index < holidays.length ; index +=1){
      if(holidays[index].style.backgroundColor === novaCor){
        holidays[index].style.backgroundColor = corAtual;
      }
      else {
        holidays[index].style.backgroundColor = novaCor;
      }
    }
  })
}
chanceColorHolydais();

//Exercicio 4;
function btnfriday(btnFridayName){
  const fridayBtn = document.createElement('button');
  const divContainerButtons = document.getElementsByClassName('buttons-container');
  fridayBtn.innerHTML = btnFridayName;
  fridayBtn.id = 'btn-friday';
  divContainerButtons[0].appendChild(fridayBtn);
}
btnfriday('Sexta-Feira');

//Exercicio 5;
function changeTextFriday(fridayArray){
  const btnFriday = document.getElementById('btn-friday');
  const fridayElements = document.getElementsByClassName('friday');
  const textFridayElements = 'dia de breja!!!';
  btnFriday.addEventListener('click',function(event){
    for(let index = 0; index < fridayElements.length ; index +=1){
      if(fridayElements[index].innerHTML != textFridayElements){
        fridayElements[index].innerHTML = textFridayElements;
      }
      else  {
        fridayElements[index].innerHTML = fridayArray[index];
      }
    }
  })
}
const arraySexta = [4,11,18,15];
changeTextFriday(arraySexta);

//Exercicio 6:
function daysZoom(){
  let dias = document.querySelector('#days');
  dias.addEventListener('mouseover',function(event){
    event.target.style.fontSize ='40px';
    event.target.style.fontWeigth = '600';
  })
}
daysZoom();

//exercicio 7;
function daysOffZoom(){
  let dias = document.querySelector('#days');
  dias.addEventListener('mouseout',function(event){
    event.target.style.fontSize ='20px';
    event.target.style.fontWeigth = '400';
  })
}
daysOffZoom();

//exercico 7:
function minhaTarefa(tarefa){
  const tagSpan = document.createElement('span');
  const divTask = document.querySelector('.my-tasks');
  tagSpan.innerHTML = tarefa;
  divTask.appendChild(tagSpan);
}
minhaTarefa('cozinhar');

//exercicio 8;
function insertColor(cor){
  const divClass = document.createElement('div');
  const divMyTask = document.querySelector('.my-tasks');
  divClass.classList.add('task');
  divClass.style.backgroundColor = cor;
  divMyTask.appendChild(divClass);
}
insertColor('red');

//exercicio 9;
function classSelected(){
  const divTask = document.querySelector('.task');
  divTask.addEventListener('click',function(event){
    if(divTask.classList != 'task selected'){
      divTask.classList.add('selected');
    }
    else{
      divTask.classList.remove('selected');
    }
  })
 }
classSelected();

//Exercicio 10;
function colorDay(){
  const selectedTask = document.getElementsByClassName('task selected');
  const days = document.querySelector('#days');
  const taskDiv =  document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  days.addEventListener('click',function(event){
    let eventTargetColor = event.target.style.color ;
    if(selectedTask.length > 0 && eventTargetColor !== taskColor){
      const color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    }
      else if(eventTargetColor === taskColor && selectedTask.length !==0){
        event.target.style.color ='rgb(119,119,119)';
      }
    
  })
}
colorDay();

//exercicio bonus;
function adicionarInput(){
  const inputElement = document.getElementById('task-input');
  const btnAdd = document.getElementById('btn-add');
  const taskList = document.querySelector('.task-list');
  btnAdd.addEventListener('click',function(event){
    if(inputElement.value.length > 0 ){
      let newLi = document.createElement('li');
      newLi.innerText = inputElement.value;
      taskList.appendChild(newLi);
      inputElement.value =' ';
    }
    else{
      alert('ERROR: Insira pelo menos um caracter.');
    }
  })
  inputElement.addEventListener('keyup',function(event){
    if(event.key ==='Enter'&& inputElement.value.length > 0){
      let newLi = document.createElement('li');
      newLi.innerText = inputElement.value;
      taskList.appendChild(newLi);
      inputElement.value = '';
    }
  })
}
adicionarInput();