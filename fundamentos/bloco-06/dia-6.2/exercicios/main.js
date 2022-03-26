const botaoDesab = document.getElementById('btn-submit');

botaoDesab.addEventListener('click', function (event){
    event.preventDefault();
})


// ****NÃO CONSEGUI FAZER NADA DISSO FUNCIONAR*****

// function desabilitaBotao (event){
//     event.preventDefault();
//     const validation = textInputValidation();
//     if (validation === false){
//         alert('Dados inválidos');
//     } else {
//         alert('Dados enviados com sucesso! Obrigada por participar do concurso TrybeTrype.');
//     }
// }

// function textInputValidation(){
//     const inputEmail = document.getElementById('email').value.length;
//     const emailInvalido = inputEmail < 10 || inputEmail > 40;

//     const name = document.getElementById('informa').value.length;
//     const nameInvalid = name < 10 || name > 50;

//     const descreve = document.getElementById('descricao').value.length;
//     const descricaoInvalida = descreve < 10 || descreve > 50;

//     if (emailInvalido || nameInvalid || descricaoInvalida){
//         return false;
//     }
//     else {
//         return true;
//     }
// }



// function habilitaBotao (){
//     const botaoSubmete = document.getElementById('btn-submit');
//     const deAcordo = document.getElementById('de-acordo2');
//     botaoSubmete.disabled = !deAcordo.checked;
// }

// function enableSubmit(){
//     const botaoSubmete = document.getElementById('btn-submit');
//     const deAcordo = document.getElementById('de-acordo2');
//     botaoSubmete.disabled = deAcordo.checked;
// }

// window.onload = function() {
//     const botaoSubmete = document.getElementById('btn-submit');
//     botaoSubmete.addEventListener('click', desabilitaBotao);
//     const deAcordo = document.getElementById('de-acordo2');
//     deAcordo.addEventListener('change', enableSubmit);
// }



// Copiar
// function clearFields() {
//   const formElements = document.querySelectorAll('input');
//   const textArea = document.querySelector('textarea');
//   for (let index = 0; index < formElements.length; index += 1) {
//     const userInput = formElements[index];
//     userInput.value = '';
//     userInput.checked = false;
//   }
//   textArea.value = '';
// }

