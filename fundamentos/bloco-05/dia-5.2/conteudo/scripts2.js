// 1)Crie um irmão para elementoOndeVoceEsta.
function criaIrmao (){
    let enderecoIrmao = document.getElementById('pai');
    let criaIrmao = document.createElement('section');
    criaIrmao.innerText = 'Testando';
    criaIrmao.classList = 'nova';
    enderecoIrmao.append(criaIrmao);
}
criaIrmao();

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
    let criaNeto = document.createElement('section');
    criaNeto.innerText = "Tudo caminhando muito bem!";
    enderePai.appendChild(criaNeto);
}
neto();

// 4)A partir desse filho criado, acesse terceiroFilho.
document.getElementsByTagName('section')[4].parentElement.parentElement.nextElementSibling;


// III - Removendo elementos

// Remova todos os elementos filhos de paiDoPai exceto pai , 
// elementoOndeVoceEsta e primeiroFilhoDoFilho.
let localRemover = document.getElementById('pai')
let novoLocalRem = document.getElementById('elementoOndeVoceEsta')
let primeiroFilho = document.getElementById('primeiroFilho');

let segRemove = document.getElementById('segundoEUltimoFilhoDoFilho');

let terceiroRemov = document.getElementById('terceiroFilho');
let quartoRemov = document.getElementById('quartoEUltimoFilho');
let quintoRemove = document.getElementsByClassName('nova')[0];

localRemover.removeChild(primeiroFilho);
novoLocalRem.removeChild(segRemove);
localRemover.removeChild(terceiroRemov);
localRemover.removeChild(quartoRemov);
localRemover.removeChild(quintoRemove);