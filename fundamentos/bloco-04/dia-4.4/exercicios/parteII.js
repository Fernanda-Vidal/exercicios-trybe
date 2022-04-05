// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromo (paramString){
    const array = paramString;
    const splits = array.split('');
    const inverte = splits.reverse();
    const jointfy = inverte.join('');
    
    if(jointfy === paramString){
        return true;
    }
    return false;
}

console.log(palindromo('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggest(arrayInteiros){
    let compara = arrayInteiros[0];
    for (i in arrayInteiros){
        if (compara < arrayInteiros[i]){
            compara = arrayInteiros[i];
        }
    }
    let maior = arrayInteiros.indexOf(compara);
    return maior;
}

console.log(biggest([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smaller(arrayInteiros){
    let compara = arrayInteiros[0];
    for(i in arrayInteiros){
        if(compara > arrayInteiros[i]){
            compara = arrayInteiros[i];
        }
    }
    let menor = arrayInteiros.indexOf(compara);
    return menor;
}

console.log(smaller([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestLength(arrayNomes){
    let biggest = arrayNomes[0];
    for (i in arrayNomes){
        if (biggest.length < arrayNomes[i].length){
            biggest = arrayNomes[i];
        }
    }
    return biggest;
}

console.log(biggestLength(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// -----------------------------------------------------------

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function thousandTimes(arrayInteiros){
    // let number = arrayInteiros[0];
    let repete = 0;
    let repetido = 0;
    
    for (i in arrayInteiros){
            let guarda = 0;
            for (i2 in arrayInteiros){
                if(arrayInteiros[i] === arrayInteiros[i2]){
                    guarda += 1;
                }
            }
            if (guarda > repete){
            repete = guarda;
            repetido = arrayInteiros[i];
            }
                     
    }
    console.log(`O número ${repetido} se repete ${repete} vezes.`);
}

    
thousandTimes([2, 0, 5, 5, 5, 9, 9, 9, 9, 5]);


    // --------------------------------------------------------------------------
    
    // 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
   

        function somaTudo(number){
        let soma = 0;
    for (let i = 1; i <= number; i += 1){
        soma = soma + i;
        
    }
    return soma;
}
console.log(somaTudo(9));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .


function verification (palavra, fimPalavra){
   palavra = palavra.split('');
   fimPalavra = fimPalavra.split('');
   controle = true;
   for (let i = 0; i < fimPalavra.length; i += 1){
       if (palavra[palavra.length - fimPalavra.length + i] != fimPalavra[i]){
           controle = false;
       }
   }
   return controle;
}

console.log(verification('fernanda', 'fe'));


function verification (palavra, fimPalavra) {
    let result;
    let inverso = palavra.split('').reverse().join('');
    let fimInverso = fimPalavra.split('').reverse().join('');
    for(let i = 0; i < fimInverso.length; i += 1){
        if(inverso[i] !== fimInverso[i]){
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result;
}

console.log(verification('fernanda', 'anda'));