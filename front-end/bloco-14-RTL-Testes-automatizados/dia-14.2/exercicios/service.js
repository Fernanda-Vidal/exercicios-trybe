const randomNumber = () => Math.random() * 100 + 1;


const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concatenateStrings = (first, second) => first + ' ' + second;




console.log(firstLetter('fe'))

module.exports = {
    randomNumber,
    upperCase,
    firstLetter,
    concatenateStrings,
};
