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
// Exercício 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dayCalendar() {
    let selecionaUl = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let armaz = dezDaysList[i];
        let createDay = document.createElement('li');
        createDay.innerText = armaz;
        createDay.classList.add("day");
        createDay.addEventListener('mouseover', zoom);
        createDay.addEventListener('mouseout', removeZoom);    

        if (armaz === 24 || armaz === 31) {
            createDay.classList.add('holiday');
        }
        else if (armaz === 4 || armaz === 11 || armaz === 18) {
            createDay.classList.add('friday');
        }
        else if (armaz === 25) {
            createDay.classList.add('friday');
            createDay.classList.add('holiday');
        }
        selecionaUl.appendChild(createDay);
    }
}
dayCalendar();

// Exercício 2:
function criaBotao(stringFeriados,addId, funcao) {
    let selecionaDiv = document.getElementsByClassName('buttons-container')[0];
    let botao = document.createElement('button');
    botao.id = addId;
    botao.innerText = stringFeriados;
    selecionaDiv.appendChild(botao);
}
criaBotao('Feriados', "btn-holiday", mudaCor);

// Exercício 3 :
function mudaCor() {
    let selecionaBotao = document.querySelector('#btn-holiday');
    let selecionaClasse = document.getElementsByClassName('holiday');
    let cor = 'pink';
    let corOriginal = 'rgb(238,238,238)';


    selecionaBotao.addEventListener('click', function() {
        for (let i = 0; i < selecionaClasse.length; i += 1){
            if (selecionaClasse[i].style.backgroundColor === cor) {
                selecionaClasse[i].style.backgroundColor = corOriginal;
            }
            else {
            selecionaClasse[i].style.backgroundColor = cor;
        }
}
})
}
mudaCor();

// Exercício 4:
criaBotao('Sexta-feira', 'btn-friday');

// Exercício 5:
function mudaTexto(sextasFeiras){
    let selecionaBotao = document.querySelector('#btn-friday');
    let selecionaClasse = document.getElementsByClassName('friday');
    let texto = 'Sextou!';

selecionaBotao.addEventListener('click', function(){
    for (let i = 0; i < selecionaClasse.length; i += 1){
        if (selecionaClasse[i].innerText !== texto){
            selecionaClasse[i].innerText = texto;
        }
        else {
            selecionaClasse[i].innerText = sextasFeiras[i];
        }
    }
})
}

mudaTexto([4, 11, 18, 25]);

// Exercício 6:
function zoom(event){
    event.target.style.fontSize = '50px'
    
}

function removeZoom(event){
    event.target.style.fontSize = '';
}

// Exercício 7:
function addTask (tarefa){
    let selecionaDiv = document.getElementsByClassName('my-tasks');
    let criaSpan = document.createElement('span');
    criaSpan.innerText = tarefa;
    selecionaDiv[0].appendChild(criaSpan);
}
addTask("cozinhar");

// Exercício 8:
function addLegend(cor){
    let selecionaDiv = document.getElementsByClassName('my-tasks');
    let criaDiv = document.createElement('div');
    criaDiv.style.backgroundColor = cor;
    criaDiv.classList = 'task';
    selecionaDiv[0].appendChild(criaDiv);
}
addLegend('pink');

// Exercício 9:
function switchClass(){
    let selectedTask = document.getElementsByClassName('task selected');
    let task = document.querySelector('.task');

    task.addEventListener('click', function(event){
        if (selectedTask.length === 0){
            event.target.classList = 'task selected';
        }
        else {
            event.target.classList = 'task';
        }
    })
}
switchClass();

// Exercício 10:
function addColor(){
    let days = document.querySelector('#days');
    let selectedTask = document.getElementsByClassName('task selected');
    let taskDiv = document.getElementsByClassName('task');
    let taskColor = taskDiv[0].style.backgroundColor;
    
    days.addEventListener('click', function(event){
        let eventTargetColor = event.target.style.color;

        if(selectedTask.length > 0 && eventTargetColor !== taskColor){
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        }
        else if (eventTargetColor === taskColor && selectedTask.length !== 0){
           event.target.style.color = 'rgb(119,119,119)';
        }                                            
    })
}
addColor();

// Bônus:
const getButton = document.getElementById('btn-add');
const getUL = document.getElementsByClassName('task-list');

function addCommitment(){
    const getInput = document.getElementById('task-input');
    
    if(getInput.value){
        let newLi = document.createElement('li');
        newLi.innerText = getInput.value;
        getUL[0].appendChild(newLi);
    }
    document.getElementById('task-input').value = '';

}

getButton.addEventListener('click', addCommitment);
