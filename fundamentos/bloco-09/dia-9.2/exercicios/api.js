// const fetch = require('node-fetch');
const url = 'https://api.coincap.io/v2/assets';

const fetchCoin = () => {
    const coins = fetch(url)
    .then(response => response.json())
    .then (resultJson => percorreArray(resultJson))
    .catch((error) => console.log('error', error))
    // .then(data => document.getElementById('coins').innerText = data)    
    

    return coins;
};

const percorreArray = (parametro) => {
    parametro.data.forEach((coin) => {
        if (coin.rank <= 10) {
            const coinPrice = Number(coin.priceUsd).toFixed(2);
            const moeda = {nome: coin.id, simbolo: coin.symbol, valorUS: coinPrice};
        return append(moeda);
        }
    })
}


function append(info) {
    const ol = document.getElementById('coins');
    const li = document.createElement('li');

    li.innerText = `${info.nome} (${info.simbolo}): ${info.valorUS}`;
    ol.appendChild(li);
}
    

window.onload = () => fetchCoin(); 


