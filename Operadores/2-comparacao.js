//Permite a comparação de dois ou mais valores e apresenta um valor lógico de retorno, indicando se aquela operação é verdadeira (true) ou falsa (false).

var h = 4;

 (h == 4)  // retorna verdadeiro se os valores forem iguais

/* Para representar a operação de comparação, usamos ‘==’. Outra maneira de fazer comparação é utilizando o operador ‘===’. Qual a diferença entre eles?

==   compara o valor de duas variáveis
=== compara o valor e o tipo de duas variáveis

const numero = 4;
 const texto  = "4";

 console.log(numero == texto);  // false
 console.log(numero === texto); // true 
 
 */

    let dezNumero = 10;
    let dezTexto = "10";

    console.log (dezNumero==dezTexto); //compara só os valores --> TRUE
    console.log (dezNumero===dezTexto); //compara tipo de variáveis --> FALSE

    dezTexto = 'Esse é o texto "10"';
    console.log(dezTexto);

    let alturaMarcos = 100;
    let alturaJoao = 100;
    let alturaMaria = 120;

console.log(alturaMarcos == alturaJoao);
console.log(alturaMarcos == alturaMaria);
console.log(alturaMarcos != alturaMaria);

== // Comparar se é igual
!= // Comparar se é diferente
> // Comparar se o valor da esquerda é maior que o da direita
< // Comparar se o valor da esquerda é menor que o da direita
>= // Comparar se o valor da esquerda é maior ou igual que o da direita
<= // Comparar se o valor da esquerda é menor ou igual que o da direita=