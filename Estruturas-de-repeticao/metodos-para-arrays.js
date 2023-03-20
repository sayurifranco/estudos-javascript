// Métodos

// Acessando um elemento

const numeros = [50, 20, 15, 14, 8];
console.log(numeros[1]);

// Adicionar no final

const numeros = [50, 20, 15, 14, 8];
numeros.push(10);

console.log(numeros); // 50, 20, 15, 14, 8, 10

// Adicionar no início

const numeros = [50, 20, 15, 14, 8];
numeros.unshift(10);

console.log(numeros); // 10, 50, 20, 15, 14, 8

// Remover do final

const numeros = [50, 20, 15, 14, 8];
numeros.pop();

console.log(numeros); // 50, 20, 15, 14

// Remover do início

const numeros = [50, 20, 15, 14, 8];
numeros.shift();

console.log(numeros); // 20, 15, 14, 8

// Juntar dois arrays

const numerosA = [50, 20, 15];
const numerosB = [14, 8];
numerosA.concat(numerosB);

console.log(numerosA); // 50, 20, 15, 14, 8