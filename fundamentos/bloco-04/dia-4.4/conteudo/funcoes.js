// 1 -Faça cinco programas, um para cada operação aritmética básica. Seu 
// programa deve ter duas constantes, a e b , definidas no começo com 
// os valores que serão operados. Faça programas para:
function soma(par1, par2) {
    return (par1 + par2);
};

console.log(soma(2, 4));



function subtracao(par1, par2) {
    return (par1 - par2);
};

console.log(subtracao(10, 5));



function mutiplicacao(par1, par2) {
    return (par1 * par2);
};

console.log(mutiplicacao(3, 9));



function divisao(par1, par2) {
    return (par1 / par2);
};

console.log(divisao(100, 5));



function modulo(par1, par2) {
    return (par1 % par2);
};

console.log(modulo(354, 2));

// 2-Faça um programa que retorne o maior de dois números. Defina no 
// começo do programa duas constantes com os valores que serão 
// comparados.
function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return (num1);
    }
    else {
        return (num2);
    };
}
console.log(maiorNumero(10, 20));

// 3-Faça um programa que retorne o maior de três números. Defina no
//  começo do programa três constantes com os valores que serão
//  comparados.
function maiorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return (num1);
    }
    else if (num2 > num1 && num2 > num3) {
        return (num2);
    }
    else {
        return (num3);
    }
}
console.log(maiorDeTres(1000, 2000000, 30));

// 4-Faça um programa que, dado um valor definido numa constante, retorne 
// "positive" se esse valor for positivo, "negative" se for negativo e "zero" 
// caso contrário.

function booleano(constante) {
    if (constante > 0) {
        return "Positive";
    }
    else if (constante < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log(booleano(0));

// 5-Faça um programa que defina três constantes com os valores dos três ângulos internos 
// de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo 
// e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma 
// mensagem de erro.

function triangulo(par1, par2, par3) {
    if (par1 < 0 || par2 < 0 || par3 < 0) {
        return "Erro!";
    }
    else if (par1 + par2 + par3 === 180) {
        return "True";
    }
    else {
        return "False";
    }
}
console.log(triangulo(60, 60, -60));