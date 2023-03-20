// While e Do-While definem uma estrutura de repetição, 
// ou seja, envolvem um determinado bloco de código e o 
// executam repetidas vezes dentro de uma condição. 
// A sintaxe de cada estrutura é assim:

while (condição) {
    código
 };

 do {
    código
 } while (condição);

// While

// No while, um bloco de código é executado até que um 
// teste condicional se torne falso, sendo importante 
// lembrar que a condição analisada para a execução do 
// laço de repetição deverá retornar um valor booleano. 

let salario = 1000;

 while (salario < 5000) {
    salario = salario + 500;

    // imprime o salário até o valor se igualar a 5000
    console.log("Salário: R$ ", salario); 
 };


// Do-while

// A única diferença existente na instrução do-while
// é que nela o código é executado no mínimo uma vez, 
// ou seja, mesmo que nossa condição a ser verificada 
// para o loop seja falsa, o código entrará na estrutura 
// para então realizar a comparação dos valores.

let aumento = 100;

 do {
    console.log("Aumento de: R$ ", aumento); 

    aumento = aumento + 50;
 } while (aumento < 100);