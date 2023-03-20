const leiaEntrada = require("readline");

const lendo = leiaEntrada.createInterface({
    input: process.stdin,
    output: process.stdout,
});

lendo.question("Qual o seu nome?", function (answer){
    console.log(`Oh, seu nome é ${answer}`);
});