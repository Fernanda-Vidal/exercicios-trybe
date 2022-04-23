// const fetch = require('node-fetch');

const fetchCoin = () => {
    const url = 'https://api.coincap.io/v2/assets';
    const coins = fetch(url)
    .then(response => response.json())
    .then (resultJson => resultJson.data)
    .catch((error) => console.log('error', error))
    
    return coins;
};

const fetchUsdCurrencies = () => {
    const urlCurrencyApi = 'https://cdn.jsdelivr.net/gh/fawazahmed0/'
    const endpoint = 'currency-api@1/latest/currencies/usd.min.json'
    const url = urlCurrencyApi.concat(endpoint);

    const usdCurrencies = fetch(url)
    .then(response => response.json())
    .then(data => data.usd)
    .then(info => info.brl)
    .catch(error => error.toString());

    return usdCurrencies;
}
// console.log(fetchCoin());

const percorreArray = async () => {
    const usdCurrencies = await fetchUsdCurrencies();
    const coins = await fetchCoin();

    coins.forEach((coin) => {
        if (coin.rank <= 10) {
            const coinPrice = Number(coin.priceUsd);
            const coinCurrency = coinPrice * usdCurrencies;
            const moeda = {nome: coin.id, simbolo: coin.symbol, valor: coinCurrency.toFixed(2)};
        return append(moeda);
        }
    })
}

const append = (info) => {
    const ol = document.getElementById('coins');
    const li = document.createElement('li');

    li.innerText = `${info.nome} (${info.simbolo}): R$ ${info.valor}`;
    ol.appendChild(li);
}
    

window.onload = () => percorreArray(); 


