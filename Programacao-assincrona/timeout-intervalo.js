// Timeout e Intervalos

// No Javascript existem códigos que são considerados 
// temporizadores e servem para enfileirar a execução de 
// funções dentro de um determinado tempo. Os mais conhecidos 
// são: setTimeout e setInterval. O primeiro enfileira uma 
// tarefa para ser executada em X milissegundos, o segundo 
// enfileira uma tarefa recorrente para ser executada em X 
// milissegundos.

// Para exemplificar esse efeito, podemos usar o método 
// setTimeout() do JavaScript, da seguinte forma:

function printAsync() {
    console.log("Teste");
 };

 function printAsync2() {
    setTimeout((printAsync) => {
        console.log("Texto teste")
    }, 2000);
 };

printAsync();

// Percebemos que a execução assíncrona deste código faz com 
// que o texto da função printAsync2 é exibido somente após 
// dois segundos, tempo que especificamos com a função 
// setTimeout().

// Vendo assim, pode parecer um exemplo simples, mas é disso 
// que se trata a programação assíncrona: permitir que a 
// execução não fique presa esperando pela resposta de um 
// servidor ou uma API REST. Seria a mesma coisa que enviar 
// uma mensagem pelo WhatsApp e ficar esperando a resposta sem
// fazer mais nada nesse meio tempo.

// No exemplo a seguir, o navegador vai esperar dois segundos 
// antes de executar a função anônima, e depois vai mostrar a 
// mensagem de alerta.

let myGreeting = setTimeout(function() {
  alert("Hello World!");
 }, 2000)

// Aqui vimos que a função setTimeout executa um bloco 
// específico uma vez depois de um determinado tempo. O 
// código a seguir faz uso da função setTimeout() e exibe 
// uma mensagem de texto após 3 segundos.

setTimeout( 
    () => {
        console.log("Oi, depois de 3 segundos");
    },
    3 * 1000
 );

// setInterval

// A função de intervalos é um pouco diferente, principalmente 
// devido ao motivo pelo qual ela existe. Quando falamos em 
// intervalos de código, geralmente queremos executar uma 
// determinada função a cada determinado tempo.

// Portanto, a função setInterval sempre — ou pelo menos na 
// maioria das vezes — vai receber uma função como callback 
// que vai executar alguma coisa.

<p id="demo"></p>

<script>
    const element = document.getElementById("demo");
    setInterval(function() {element.innerHTML += "Hello"}, 
    1000);
</script>

// Utilizando o código acima em um arquivo teste.html, por 
// exemplo, notamos que a cada 1 segundo o texto Hello será 
// escrito em tela.

// Outra função disponível para executar um código de maneira 
// assíncrona é:

// requestAnimationFrame: uma versão moderna de setInterval(). 
// Ela executa um  bloco de código específico antes do 
// navegador renderizar a tela novamente, permitindo que 
// seja executada em uma taxa de quadros adequada, 
// independentemente do ambiente em que está sendo executado.