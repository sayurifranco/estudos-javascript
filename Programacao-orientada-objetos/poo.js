// Objetos podem ser entendidos como uma coleção de 
// valores que são referenciados por nome, e que podem 
// ser recuperados para serem utilizados em outras 
// partes de um programa.

// Criando objetos

// Para criar um objeto com propriedades, usamos a sintaxe 
// de chave : valor. Por exemplo, para criar um objeto pessoa 
// com as propriedades nome, sobrenome e cpf, devemos definir 
// o seguinte código:

let pessoa = {
    nome: "Ana", 
    sobrenome: "Beatriz",
    cpf: '00297415845'
 };

//  Outra maneira de criar objetos em JavaScript é 
//  utilizando uma função construtora (construct). 
//  Se quisermos criar o mesmo objeto que criamos 
//  anteriormente, mas agora usando uma função construtora
//  para isso, basta escrever o seguinte código:

 let aluno = new Object();
 
  aluno.nome = "Ana";
  aluno.sobrenome = "Beatriz";
  aluno.cpf = '00297415845';

//   Aqui, a sintaxe ficou um pouco diferente. Utilizamos a 
//   palavra-chave new seguida pela função construtora Object(),
//   em vez de abrir e fechar chaves. Depois, adicionamos as 
//   propriedades e métodos utilizando pessoa.nome, 
//   pessoa.sobrenome e pessoa.cpf, e atribuímos os valores 
//   a elas em vez de colocar os pares de "nome: valor".

// Manipulação de objetos

// Para acessar os elementos de um determinado objeto, 
// podemos utilizar a notação de ponto e de array.

let funcionario = {
    nome: "Ana", 
    sobrenome: "Beatriz",
    cpf: '00297415845'
 };

 console.log(funcionario.nome);    // notação de ponto
 console.log(funcionario['cpf']);   // notação de array

//  Depois que um objeto é definido em Javascript, podemos 
//  realizar diversas operações sobre as propriedades e métodos,
//  tais como: inserção de valores, atualização, deletar um 
//  item, acessar os métodos, verificar se uma propriedade 
//  existe, e até mesmo realizar um loop em um objeto.

// Utilize o trecho de código abaixo e crie um loop para o 
// objeto pessoa. Execute e veja o resultado em tela. Será 
// possível visualizar todos os valores para cada uma das 
// propriedades existentes.

let paciente = new Object();

paciente.nome = "Marcos"
paciente.sobrenome = "Franco";
paciente.cpf = '11290568741';

for (key in paciente) {
    console.log(paciente[key]);
 } 