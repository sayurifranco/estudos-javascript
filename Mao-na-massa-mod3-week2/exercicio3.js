/** Crie um array com 5 números reais, e para cada 
 * elemento utilize funções matemáticas para exibir 
 * respectivamente:
 * a. O quadrado
 * b. A raiz quadrada
 * c. Apenas a parte inteira
 * d. O número arredondado para baixo
 * e. O número arredondado para cima */

const numeros = [2, 2.45, 3.8, -4.1, 0]

numeros.forEach(item => {
    console.log(`CÁLCULOS PARA O NÚMERO ${item}`);
    console.log("QUADRADO " + Math.pow(item, 2));
    console.log("RAIZ QUADRADA " + Math.sqrt(item));
    console.log("PARTE INTEIRA " + Math.trunc(item));
    console.log("ARREDONDA PARA BAIXO " + Math.floor(item));
    console.log("ARREDONDA PARA CIMA " + Math.ceil(item));
    console.log(`_______________________________`);   
});