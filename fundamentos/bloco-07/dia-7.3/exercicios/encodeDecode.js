function encode(parametro) {
    let word = [];

    for (letra in parametro) {
      if (parametro[letra] === 'a') {
        word += 1;
      }
      else if (parametro[letra] === 'e') {
        word += 2;
      }
      else if (parametro[letra] === 'i') {
        word += 3;
      }
      else if (parametro[letra] === 'o') {
        word += 4;
      }
      else if (parametro[letra] === 'u') {
        word += 5;
      }
      else if (parametro[letra] === ' ') {
        word += ' ';
      }
      else {
        word += (parametro[letra]);
      }
    } return word;
  }
  console.log(encode('Fernanda'));

  function decode(parametro2) {
    let word2 = [];
    for (numero in parametro2) {
      if (parametro2[numero] === '1') {
        word2 += 'a';
      }
      else if (parametro2[numero] === '2') {
        word2 += 'e';
      }
      else if (parametro2[numero] === '3') {
        word2 += 'i';
      }
      else if (parametro2[numero] === '4') {
        word2 += 'o';
      }
      else if (parametro2[numero] === '5') {
        word2 += 'u';
      }
      else if (parametro2[numero] === ' ') {
        word2 += ' ';
      }
      else {
        word2 += (parametro2[numero]);
      }
    } return word2;
  }

//   console.log(encode('Fernanda'));

module.exports = {encode, decode};



const string = 'casa';
console.log(string.length);

