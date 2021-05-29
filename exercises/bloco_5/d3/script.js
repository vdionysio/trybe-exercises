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

// Escreva seu código abaixo.
function createDaysNumbers() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  for (let i = 0; i < dezDaysList.length; i += 1){
    dayItem = document.createElement('li');
    ulParent = document.getElementsByTagName('ul')
    dayItem.innerHTML = dezDaysList[i]
    dayItem.style.display = 'inline-block'
    dayItem.className = 'day'
    dayItem.style.width = '13.6%'
    dayItem.style.marginBottom = '12px'
    dayItem.style.alignContent = 'right'
    
    document.getElementsByTagName('ul')[2].appendChild(dayItem);
  }

  let arrHolidays = [24, 25, 31];
  let arrFridays = [4,11,18,25];

  for (let i = 0; i < dezDaysList.length; i += 1){
    if (arrHolidays.includes(dezDaysList[i])){
      document.querySelectorAll('.day')[i].className += ' holiday'
    }
    if (arrFridays.includes(dezDaysList[i])){
      document.querySelectorAll('.day')[i].className += ' friday'
    }
  }
}
createDaysNumbers();

function createButton(string, idButton) {
  let button = document.createElement('button');
  button.innerHTML = string;
  button.id = idButton;
  document.getElementsByClassName('buttons-container')[0].appendChild(button)
}
createButton("Feriados", "btn-holiday");
createButton("Sexta-feira", "btn-friday")

buttonHoliday = document.getElementById("btn-holiday");
buttonHoliday.addEventListener("click", function () {
  let holidays = document.querySelectorAll('.holiday');
  for (i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor == '') {
      holidays[i].style.backgroundColor = '#33ff55';
      holidays[i].style.color = 'white'
    } else if (holidays[i].style.backgroundColor == '#ff3355'){ } else {
      holidays[i].style.backgroundColor = "";
      holidays[i].style.color = ''
    }
    }
});

buttonfriday = document.getElementById("btn-friday");
buttonfriday.addEventListener("click", function () {
  let fridays = document.querySelectorAll('.friday');
  
  for (i = 0; i < fridays.length; i += 1) {
    
    if (fridays[i].innerHTML == 'Sextou') {
      fridays[i].innerHTML = i * 7 + 4;
    } 
    else {
      fridays[i].innerHTML = 'Sextou';
    }
  }
});

dayZoom = document.getElementsByClassName('day');
for (let i = 0; i < dayZoom.length; i += 1) {
  dayZoom[i].addEventListener('mouseover', function (element) {
    element.target.style.fontSize = '24px'
    element.target.style.fontWeight = 'bold'
    element.target.style.marginBottom = '6px'
    element.target.style.cursor = 'pointer';
  });
}

for (let i = 0; i < dayZoom.length; i += 1) {
  dayZoom[i].addEventListener('mouseleave', function (element) {
    element.target.style.fontSize = ''
    element.target.style.fontWeight = ''
    element.target.style.marginBottom = '12px'
  });
}

function createTask(string) {
  let spanTag = document.createElement('span');
  spanTag.innerHTML = string;
  //spanTag.style.display = 'block';
  document.querySelector('div.my-tasks').appendChild(spanTag);
}
createTask("Projeto: ");
//createTask("estudar");

function createTaskSubt(color) {
  let subtitle = document.createElement('div');
  subtitle.classList.add('task')
  subtitle.style.borderRadius = '50%';
  subtitle.style.backgroundColor = color;
  document.querySelector('div.my-tasks').appendChild(subtitle);
}
createTaskSubt('#F35211');

document.querySelector('div.my-tasks').addEventListener('click', function (element) {
  if (element.target.className == 'task') {
    element.target.classList.add('selected');
  } else {
    element.target.classList.remove('selected')
  }
});

dayClick = document.getElementsByClassName('day');
checkColorTag = document.querySelector('div.task').classList;
for (let i = 0; i < dayClick.length; i += 1) {
  dayClick[i].addEventListener('click', function (element) {
    if (checkColorTag.contains('selected')) {
      if (element.target.style.color === '') {
        element.target.style.color = '#F35211'
      } else {
        element.target.style.color = ''
      }
    }
  });
}
document.querySelector('#btn-add').addEventListener('click', function () {
  let inputVal = document.getElementById("task-input").value;
  if (inputVal == '') {
    window.alert('Nenhum tarefa adicionada')
  } else {
    TaskItem = document.createElement('li');
    TaskItem.innerHTML = inputVal;
    document.querySelector('.task-list').appendChild(TaskItem);
    document.querySelector('#task-input').value = ''
  }
})

document.querySelector('#task-input').addEventListener('keypress', function (element) {
  let inputVal = document.querySelector('#task-input').value;
  if (element.key === 'Enter')
  if (inputVal == '') {
    window.alert('Nenhum tarefa adicionada')
  } else {
    TaskItem = document.createElement('li');
    TaskItem.innerHTML = inputVal;
    document.querySelector('.task-list').appendChild(TaskItem);
    document.querySelector('#task-input').value = ''
  }
})


/*
Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode .
*/