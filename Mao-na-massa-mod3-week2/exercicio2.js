// 2. Faça um algoritmo para exibir a tabuada de 2. O resultado na tela deve ser algo parecido com isso:

/** Resultado esperado
 * 2 x 1 = 2
 * 2 x 2 = 4
 * 2 x 3 = 6 
 * 2 x 4 = 8
 * 2 x 5 = 10 
 * 2 x 6 = 12 
 * 2 x 7 = 14 
 * 2 x 8 = 16 
 * 2 x 9 = 18 
 * 2 x 10 = 20
 * */ 

let resultado;

for (let index = 1; index <= 10; index++) {
    resultado = index * 2;
    console.log(`2 x ${index} = ${resultado}`);
}