// O foreach é um método que executa uma função para cada 
// elemento de um array. Para compreender melhor o seu 
// funcionamento, considere o exemplo a seguir:

const notas = [8, 9, 10, 6.5, 8.5];

 let soma = 0;

 notas.foreach(nota => {
    soma += nota;
 });

 let media = soma/notas.length;

 console.log("Média: ", media);

// Com o uso do foreach, não precisamos acessar um 
// elemento usando colchetes nota[0], por exemplo. 
// Note que definimos o nome nota, que já representa 
// cada elemento presente no array notas.

