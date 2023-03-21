/**
 * calcular a media aritmetica
 * somar os numeros da equação e dividir pelo número de elementos
 * exibir a media obtida na tela - console.log()
 * verificar se a nota é maior ou menor que 6
 * se for maior que 6, exibir na tela "Aprovado"
 * se não, exibir "Reprovado"
 */

let readlineSync = require('readline-sync');

let nota_1 = readlineSync.question('Insira o valor da nota 1: ');
let nota_2 = readlineSync.question('Insira o valor da nota 2: ');

console.log('As notas digitadas foram:', nota_1, nota_2);

nota_1 = parseFloat(nota_1);
nota_2 = parseFloat(nota_2);

let media = (nota_1 + nota_2)/2;

console.log('A média das notas: ', media);

if (media>=6) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

