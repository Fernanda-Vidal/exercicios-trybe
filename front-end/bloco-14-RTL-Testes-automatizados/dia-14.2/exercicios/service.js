const randomNumber = () => Math.random() * 100 + 1;

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concatena = (first, second) => first + ' ' + second;

const fetchApiDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';

    return fetch(url)
    .then(response => response.json()
    .then(data => data.message))
    
}


// console.log(firstLetter('fe'))

module.exports = {
    randomNumber,
    upperCase,
    firstLetter,
    concatena,
    fetchApiDog,
};
