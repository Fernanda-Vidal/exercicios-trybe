function mudaTexto(){
    let paragrafo = document.getElementsByTagName("p");
    paragrafo[0].innerText = 
    "Eu me vejo trabalhando com programação, na senioridade pleno ou quase lá, ganhando pelo menos 2x mais do que ganhava como técnica de seguro.";
}
mudaTexto();

function quadradoAmarelo(cor){
    let quadradoVerde = document.getElementsByTagName("main");
    quadradoVerde[0].style.backgroundColor = cor;
}
quadradoAmarelo('rgb(76,164,109)');

function quadradoVermelho (cor) {
    let quadradoBranco = document.getElementsByClassName("center-content");
    quadradoBranco[0].style.backgroundColor = cor;
}
quadradoVermelho('white');

function corrigeTexto(elemento, texto){
    let local = document.getElementsByClassName(elemento);
    local[0].innerText = texto;
}
corrigeTexto("title", "Exercício 5.1 - JavaScript");

function letrasMaiusculas (elemento){
    let letras = document.getElementsByTagName(elemento);
    for(let i = 0; i < letras.length; i += 1){
        letras[i].innerText = letras[i].innerText.toUpperCase();
    }
}
letrasMaiusculas('p');

