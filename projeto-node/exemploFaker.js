// Instalar node
// Inicializar o projeto com npm init
// Instalar o módulo Faker pelo npm
// Criar um programa NodeJS e usar a biblioteca 
// faker para exibir um last name (sobrenome)
// e uma cor
// utilize as funções faker.name.lastName()
// e faker.color.human()

const moduloFaker = require("@faker-js/faker")

const valor = moduloFaker.faker.animal.type();

console.log(valor);

