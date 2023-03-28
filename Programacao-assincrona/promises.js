// A Promise é um tipo de objeto JavaScript especial. Ele 
// produz um valor após uma operação assíncrona ser concluída, 
// com êxito ou com erro. Os erros geralmente acontecem em 
// casos nos quais a requisição não é concluída devido ao tempo 
// limite, falha de rede, inexistência de um ponto de acesso 
// válido, e assim por diante.

// As conclusões de chamadas bem-sucedidas são indicadas pela 
// palavra resolve, e os possíveis erros são indicados pela 
// palavra reject. Para definir uma promise em linhas de código,
// podemos utilizar a seguinte estrutura:

let promise = new Promise(function(resolve, reject) {    
    // código de requisição
});

// Existe uma maneira mais resumida de criar e utilizar 
// promises, para isso utilizamos a estrutura das callback 
// functions vistas anteriormente.

// Utilizando promises com .then()

// Promises consistem em uma “promessa de retorno” a uma 
// determinada consulta ou requisição feita pelo código. 
// Elas têm um método chamado .then(), que recebe uma função 
// callback e retorna um "objeto-promessa".

// Cientes de que estamos esperando uma promessa de resultado, 
// podemos escrever o código do que irá acontecer em seguida 
// (com os dados recebidos pela promise). Dessa maneira, o 
// Javascript vai aguardar a resolução e recebimento do valor 
// sem interromper de fato o fluxo do programa.

// Só é possível requisitar à promise que execute uma função 
// callback quando o resultado estiver disponível.
// Seja ele o que foi solicitado (os dados de uma API, por 
// exemplo), ou uma mensagem de erro caso algo tenha dado 
// errado com a requisição (o servidor pode estar fora do 
// ar ou, o endpoint não existir).

// Para exemplificar melhor o comportamento e utilização de 
// promises, vamos considerar o código abaixo. Ao iniciarmos 
// uma requisição, enquanto a resposta está pendente, ela 
// retorna um promise object. O objeto, por sua vez, define 
// uma instância do método .then(). Quando o resultado da 
// requisição é retornado, o corpo da requisição é convertido 
// para JSON e este valor convertido é passado para o próximo 
// método .then().

function getUser(userId) {
 const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
}

getUser(1);

// Em linhas gerais, esse código envia o id de um usuário 
// (userId) e aguarda uma resposta que é obtida em formato 
// JSON. Imagine que você criou uma tela de cadastro de 
// usuários e, em seguida, precisa listar as informações 
// deste usuário. Para consultar os dados, podemos utilizar 
// o código acima.