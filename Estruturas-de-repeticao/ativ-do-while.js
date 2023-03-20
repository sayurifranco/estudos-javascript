// Tente obter o mesmo resultado utilizando do-while, ou ainda,
// escrever os números ímpares ou múltiplos de 5.

let numerosPares = 2;

do {
    if (numerosPares % 2 == 0){
        console.log(numerosPares);
    }    
    numerosPares = numerosPares + 1;
} while (numerosPares < 100);