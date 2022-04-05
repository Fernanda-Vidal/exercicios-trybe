// Crie uma página que contenha:

// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


const newButton = document.getElementsByTagName('button')[0];
const bodyBuddie = document.getElementsByTagName('body')[0];
const count = document.createElement('section');

let contaClick = 0;
let clickCount = () => {
    contaClick += 1;
    count.innerText = contaClick;
    bodyBuddie.appendChild(count);
    
};

newButton.addEventListener('click', clickCount);

