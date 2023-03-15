// Utilizamos o operador condicional para verificar se uma condição é válida ou não. A partir do ES6 existe a possibilidade de usar o if ternário, ou seja, toda a comparação pode ser realizada numa única linha.

// No código a seguir temos a utilização do IF para comparar se uma pessoa possui a idade mínima para votar. Repare na estrutura do bloco utilizado: caso a condição seja verdadeira (true), apresentamos uma mensagem. Se a pessoa não tiver a idade mínima, exibimos outra mensagem.

 const idadeMinima  = 16;
 const idadeEleitor = 15;

 if (idadeEleitor > idadeMinima) {  // true
    console.log("Pode votar");
 } else {                           // false
    console.log("Não pode votar");
 }

// Utilizando o if ternário, o código fica assim:

 const idadeMinima  = 16;
 const idadeEleitor = 15;
                                          // true        // false
 console.log(idadeEleitor > idadeMinima ? "Pode votar" : "Não pode votar");

// Perceba como fica mais “limpo”. Com o tempo, nos acostumamos com a leitura da linha. Só é preciso ter atenção com as condições utilizadas e com a ordem em que a resposta aparece, conforme o resultado true ou false.