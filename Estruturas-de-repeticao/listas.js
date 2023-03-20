// no Javascript, precisamos representar o nome e os valores existentes dentro de colchetes.

// Array de strings contendo nomes de alunos
const nomesAlunos = ["Ana", "Beatriz", "Carla", "Daiana"];

// Array de números contendo notas 
const mediasAlunos = [7, 8, 5, 10];

/**
 * Podemos criar também um array vazio, com apenas um elemento, 
 * contendo valores numéricos, strings, booleanos ou qualquer 
 * outro tipo permitido pelo Javascript.
 * Lembra que o número 1 se referia à aluna Ana? 
 * Para interpretar isso, precisamos saber que todo elemento 
 * dentro de um array possui um índice associado à ele, 
 * que identifica em qual posição um determinado elemento 
 * se encontra dentro do array.
 */

// índice        0   1   2   3   4
 const numeros = [50, 20, 15, 14, 8];

// O número 15 está na posição 3 do array e possui índice 2

// Lenght

// índice        0   1   2   3   4
 const numeros = [50, 20, 15, 14, 8];

// Exibe o resultado 5 para o tamanho do array
 console.log(numeros.length)

/** Com a execução do código acima, notamos que o array 
 * ‘numeros’ possui tamanho igual a 5, contudo, os índices 
 * dos elementos vão de 0 até 4. A contagem dos índices sempre 
 * começa a partir de 0.*/