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
        return(num1);
    }
    else {
        return(num2);
    };
}
console.log(maiorNumero(10, 20));