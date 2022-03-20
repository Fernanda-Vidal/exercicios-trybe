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
function criaBotao(stringFeriados,addId) {
    let selecionaDiv = document.getElementsByClassName('buttons-container')[0];
    let botao = document.createElement('button');
    botao.id = addId;
    botao.innerText = stringFeriados;
    botao.addEventListener('click', mudaCor);
    selecionaDiv.appendChild(botao);
}
criaBotao('Feriados', "btn-holiday");

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

