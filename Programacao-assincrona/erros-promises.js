// Devemos ficar atentos à possibilidade de erros em eventos 
// assíncronos. Caso não seja feito um tratamento adequado, 
// pode ficar difícil encontrar o ponto exato em uma operação 
// de debug, por exemplo. Para esses casos, podemos utilizar o 
// método .catch e .finally().

function getUser(userId) {
 const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
   .catch(error => console.log(error))
   .finally()
}

getUser(1);

// O método .catch() é retornado em caso de rejeição da promise,
// e o método .finally(), é chamado independentemente de 
// sucesso ou falha da promessa. A função callback deste 
// método é sempre executada por último e pode ser usada, 
// por exemplo, para fechar uma conexão ou dar algum aviso 
// de fim de carregamento.

// Utilizando async/wait

// As palavras-chave async e await são uma sintaxe que 
// simplifica a programação, facilitando o fluxo de escrita 
// e leitura do código. Fazendo uso desses termos é possível 
// escrever código que funciona de forma assíncrona, porém é 
// lido e estruturado de forma síncrona. 

// O async/await trabalha com o código baseado em promises, 
// porém, é como se escondesse as promessas para que a leitura 
// seja mais fluida e simples de entender.

// Definindo uma função como async, podemos utilizar a 
// palavra-chave await antes de qualquer expressão que retorne 
// uma promessa. Dessa forma, a execução da função externa 
// (a função async) será pausada até que a promise seja 
// resolvida. Podemos utilizar o código anterior, modificar 
// conforme a nossa necessidade e definir os termos async e 
// await, assim:

async function getUser(userId) {
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let data = await response.json();

    return data.nome;
}

// Agora, para executar a função getUser(), temos que fazer a 
// chamada dela utilizando a palavra await:

exibeDados(await getUser(1));

// Sempre que consideramos utilizar promises, devemos levar em 
// consideração alguns fatores para a correta execução do 
// código. A escolha entre utilizar async/await ou then() se 
// dá por algumas características