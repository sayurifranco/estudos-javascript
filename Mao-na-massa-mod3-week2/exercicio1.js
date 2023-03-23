// 1. Crie um array com 10 elementos e mostre-os na tela 
// usando cada uma das estruturas de repetição: 
// while, do-while, for e foreach.

const arrayExemplo = [1, 5, 2, 55, 224, 12, 54, 22, 6, 8];

let i = 0;

while (i<10){
    console.log(arrayExemplo[i]);
    i++;
}

do {
    console.log(arrayExemplo[i]);
    i++;
} while (i<10)

// for

for (let index = 0; index < arrayExemplo.length; index++) {
    console.log(arrayExemplo[index]);
}

// foreach

arrayExemplo.forEach(item => console.log(item));
