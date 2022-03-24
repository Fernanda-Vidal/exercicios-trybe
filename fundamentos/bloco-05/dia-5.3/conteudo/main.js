const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function switchClass(event){
let classTech = document.querySelector('.tech');
 classTech.classList.remove('tech');
 event.target.classList.add('tech');
}

firstLi.addEventListener('click', switchClass);
secondLi.addEventListener('click', switchClass);
thirdLi.addEventListener('click', switchClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function switchText(event){
let classTech = document.querySelector('.tech')
classTech.innerText = event.target.value;
}

input.addEventListener('input', switchText);


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function meuSpotrybefy(event){
  window.location.href = "https://fernanda-Vidal.github.io/";
}

myWebpage.addEventListener('dblclick', meuSpotrybefy)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function overMouse(event){
  event.target.style.backgroundColor = '#2fc18c';
  event.target.style.color = '#333';

}

function leaveMouse(event){
  event.target.style.backgroundColor = 'unset';
  event.target.style.color = 'unset';
}

myWebpage.addEventListener('mouseover', overMouse);
myWebpage.addEventListener('mouseleave', leaveMouse);

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