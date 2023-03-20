/**
 * Função define um trecho de código que pode ser utilizado 
 * em outro momento ou em situações específicas. 
 * Por exemplo, quando criamos um código e estamos repetindo 
 * sua escrita em várias linhas, podemos criar uma função com 
 * essas linhas e fazer apenas a chamada dessa função onde se 
 * fizer necessário. Assim como qualquer estrutura dentro da 
 * linguagem Javascript, para definir e criar uma função 
 * precisamos conhecer a sintaxe correta:
 * 
 *  function name (parametro1, paramentro2) {}
 */

// Exemplo 1

// Criamos a função hello que não recebe nenhum 
// parâmetro e contém apenas uma instrução para exibir 
// na tela o texto “Hello World!”. Para chamar a função 
// basta informar o nome seguido de parênteses.

function hello() {
    console.log("Hello World!");
 }

 hello()

// Podemos modificar o código acima para receber um parâmetro
// e então imprimir um texto passado no momento da chamada da função.

function hello(texto) {
    console.log("Olá", texto);
}

hello("Rodrigo")

 /**
 * Exemplo 2
 * Declaramos duas variáveis com os valores 5 e 10, e 
 * passamos como parâmetro para a função calcularMedia(). 
 * Dentro da função, realizamos a soma e calculamos a média 
 * aritmética entre esses dois números. Por fim, apenas o 
 * resultado é exibido na tela.
 */

 let numeroA = 5;
 let numeroB = 10;

 function calcularMedia(let a, let b) {
    let soma = a + b;

    let media = soma / 2;

    console.log("Media: ", media);
 }

 calcularMedia(numeroA, numeroB);

 /**
  * Usar funções facilitam muito no desenvolvimento de 
  * aplicações maiores, nas quais temos mais códigos e 
  * funcionalidades disponíveis, pois colaboram para a 
  * separação de trechos de código com funções específicas,
  *  tornando-o menor e mais legível. 
  * 
  * Existem outros tipos de funções e maneiras diferentes de 
  * defini-las. Cabe analisar qual a melhor forma de acordo 
  * com o cenário apresentado. Assim como no uso de arrays, 
  * o JavaScript nos oferece algumas funções matemáticas 
  * math() prontas, alguns exemplos são:
  */

 // match.round(): arredondar um valor de ponto flutuante
 // math.ceil(): faz o arredondamento para o valor mais alto
 // math.floor(): faz o arredondamento para o valor mais baixo
 // math.random(): retorna um número aleatório entre 0 e 1
 // math.sqrt(): retorna o valor da raiz quadrada de um número
 // math.trunc(): em um número que contém casas decimais, retorna apenas a parte inteira
