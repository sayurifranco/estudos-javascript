// Arrow function é uma maneira mais sucinta de definir uma 
// função em Javascript. O nome arrow se dá pela sintaxe 
// utilizada para escrevê-la “() =>”, que lembra uma flecha. 
// Primeiramente, vamos entender a diferença entre a sintaxe 
// tradicional e a sintaxe de uma arrow function.

// Function
 function hello(nome) {
    return `Meu nome é ${nome}`;
 }

 // Arrow Function
 const hello = nome => `Meu nome é ${nome}`;

 // A definição de uma arrow function sempre começa com 
 // a palavra reservada const. A sua escrita fica mais 
 // direta e, além disso, facilita a utilização de alguns 
 // métodos, principalmente quando trabalhamos com objetos.
 
 // Se quisermos realizar a soma de dois números, 
 // podemos definir a seguinte arrow function:

// Arrow Function
 const soma = (a, b) => a + b;

 // No exemplo abaixo utilizamos o método find para encontrar em uma lista o usuário cujo id é igual a 3:

const alunos = [
    { id: 1, nome: 'Maria da Silva' },
    { id: 2, nome: 'João Fernando' },
    { id: 3, nome: 'Pedro dos Santos' },
    { id: 4, nome: 'Silvia Maria' }
   ]
  
   const aluno = alunos.find(aluno => aluno.id === 3)
  
   console.log(aluno.nome) // Pedro dos Santos