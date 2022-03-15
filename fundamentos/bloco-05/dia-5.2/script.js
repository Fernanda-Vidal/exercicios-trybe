// 1)Acesse o elemento elementoOndeVoceEsta .
// 2)Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function acessarElemento(cor){
    let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
        ondeVoceEsta.parentElement.style.color = cor;
}
    acessarElemento('green');

    // 3)Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

function adicionaTexto(){
    let filhoPrimeiro = document.getElementById('primeiroFilho');
    filhoPrimeiro.innerText = "Comunicado importante!";

}
adicionaTexto();