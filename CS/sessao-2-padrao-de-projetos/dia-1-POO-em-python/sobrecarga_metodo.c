// Sobrecarga de métodos
// Não existe em Python

// Código em C++
#include "stdio.h"

int func(int a) { return a + 1; }
int func(char b) { return 4; }

int main() { printf("%d %d", func(1), func('a')); }
// saída: 2 4

// Uma boa explicação do motivo para o Python não possuir 
// um suporte nativo para a sobrecarga é o fato de Python ter tipagem dinâmica,
// ou seja, os tipos de dado podem mudar durante a execução do programa. 
// Em C++ os tipos das variáveis são definidos antes da execução do código, 
// no tempo de compilação.