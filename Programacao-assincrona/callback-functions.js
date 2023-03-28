// Função Callback

// Callback é uma função passada a outra função como argumento, 
// que é então invocado dentro da função externa para completar 
// algum tipo de rotina ou ação.

// Um retorno de chamada JavaScript é uma função que deve ser 
// executada após a execução de outra função.

// Uma definição mais formal seria “Qualquer função que é 
// passada como argumento para outra função, para que possa 
// ser executada nessa outra função, é chamada como uma função 
// de retorno de chamada”.

// Quando trabalhamos com o conceito de programação assíncrona, 
// entender o uso e manipulação de funções de callback ajuda e 
// muito no correto processamento das linhas de código. Com seu 
// uso, podemos executar diferentes trechos de comandos enquanto
// aguardamos respostas externas. Agindo assim, o fluxo natural 
// não é interrompido.

// Precisamos de funções de retorno de chamada porque muitas 
// ações JavaScript são assíncronas, o que significa que elas 
// não impedem a execução do programa (ou de uma função) até 
// que sejam concluídas.  Em vez disso, ela será executada em 
// segundo plano enquanto o restante do código é executado.

// No exemplo a seguir temos um array com quatro nomes, e 
// desejamos exibir cada um deles na tela. Para isso, usamos 
// a função foreach, que recebe como parâmetro a função 
// exibeNome, que por sua vez contém o trecho responsável por 
// imprimir cada um dos nomes do array.

const nomes = ["Ana","Bianca","Diego","Mateus"];

nomes.forEach(exibeNome);

function exibeNome(nome) {
    console.log(nome);
}

// E por que a utilização de callback functions é importante 
// em Javascript?

// Porque, normalmente, o código de um programa é executado de 
// maneira sequencial, ou seja, a forma como lemos dita nosso 
// entendimento e a maneira como processamos uma informação.

// Mas, às vezes, precisamos aguardar uma resposta que demora 
// um certo tempo para ser obtida, para então dar continuidade 
// da maneira correta ao programa. Para ilustrar bem essa ideia,
// considere o exemplo a seguir:

function funcao1(){
    setTimeout( function(){
    console.log('Oi após 5 segundos');
    }, 5000 );
 }

 function funcao2(){
    console.log('Olá');
 }

 funcao1();
 funcao2();

// Executando o código acima, percebemos que a saída na ordem 
// fica: 

// Olá
// Oi após 5 segundos

// Observe que as mensagens foram exibidas fora da ordem, o que 
// demonstra como o JavaScript pode funcionar ao processar os 
// blocos de código, ou seja, mesmo sem terminar o primeiro 
// bloco, o segundo foi iniciado. Você consegue imaginar como 
// deve ficar o código acima para que as mensagens sejam 
// exibidas na ordem correta?

function exibeMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
 }

 exibeMensagem('Primeira mensagem exibida', function() {
    console.log('Segunda mensagem exibida');
 });