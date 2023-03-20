// Escrever os números pares de 2 a 100 usando while e do-while

// while

while (cont < 100) {
    if (cont % 2 == 0){
        console.log(cont);
    }
    cont = cont + 1;
};

// do-while

let numerosPares = 2;

do {
    if (numerosPares % 2 == 0){
        console.log(numerosPares);
    }    
    numerosPares = numerosPares + 1;
} while (numerosPares < 100);