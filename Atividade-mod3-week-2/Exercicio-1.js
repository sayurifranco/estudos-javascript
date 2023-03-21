// 1. Crie um array com 10 elementos e mostre-os na tela 
// usando cada uma das estruturas de repetição: 
// while, do-while, for e foreach.

const array = [15, 20, 14, 8, 5, 13, 4, 7, 2, 3]

// let i = 0;

// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// do {
//     console.log(array[i]);
//     i++;
// } while (i < array.length);

// for(let e = 0; e<array.length; e++){
//     console.log(array[e])
// };

// array.forEach(e => console.log(e));

// for (const e in array) {
//     console.log(e); 
// } --- imprime o índice da array

for (const e of array) {
    console.log(e);
}

// imprime os valores da array