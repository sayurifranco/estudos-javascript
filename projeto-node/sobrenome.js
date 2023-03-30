const moduloFaker = require("@faker-js/faker")

const sobrenome = moduloFaker.faker.name.lastName();

console.log(sobrenome);