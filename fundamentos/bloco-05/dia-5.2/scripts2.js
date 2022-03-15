// 1)Crie um irmão para elementoOndeVoceEsta.
function criaIrmao (elemento){
    let enderecoIrmao = document.getElementById(elemento);
    let irmao = document.createElement('id');
    irmao.innerText = "teste";
    enderecoIrmao.appendChild(irmao);
}
criaIrmao('pai');

// 2)Crie um filho para elementoOndeVoceEsta.
function criaFilho(){
    let enderecoPai = document.getElementById('elementoOndeVoceEsta');
    let filho = document.createElement('p');
    filho.innerText = "testando novas habilidades";
    enderecoPai.appendChild(filho);
}
criaFilho();

// 3)Crie um filho para primeiroFilhoDoFilho.
function neto(){
    let enderePai = document.getElementById('primeiroFilhoDoFilho');
    let criaNeto = document.createElement('id');
    criaNeto.innerText = "Tudo caminhando muito bem!";
    enderePai.appendChild(criaNeto);
}
neto();

// 4)A partir desse filho criado, acesse terceiroFilho.
document.getElementsByTagName('id')