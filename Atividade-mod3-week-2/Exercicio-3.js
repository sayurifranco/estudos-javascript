/** Crie um array com 5 números reais, e para cada 
 * elemento utilize funções matemáticas para exibir 
 * respectivamente:
 * a. O quadrado
 * b. A raiz quadrada
 * c. Apenas a parte inteira
 * d. O número arredondado para baixo
 * e. O número arredondado para cima */

const array = [-5, 1.5, 3, 6.5, 9]

// a) O quadrado
for (let i=0; i < array.length; i++){
    quadrado = Math.pow(array[i],2);
    console.log(quadrado);
}

// b) A raiz quadrada

for (let i=0; i < array.length; i++){
    raiz = Math.sqrt(array[i]);
    arredondado = parseFloat(raiz.toFixed(4))
    console.log(arredondado);
}

// c) Apenas a parte inteira

for (let i=0; i < array.length; i++){
    int = Math.trunc(array[i]);
    console.log(int);
}

// d) O número arredondado para baixo

for (let i=0; i < array.length; i++){
    baixo = Math.floor(array[i]);
    console.log(baixo);
}

// e) O número arredondado para cima

for (let i=0; i < array.length; i++){
    cima = Math.ceil(array[i]);
    console.log(cima);
}

