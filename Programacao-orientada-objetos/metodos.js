let pessoa = {
    nome: "Ana", 
    sobrenome: "Beatriz",
    cpf: '00297415845',
    ola() {
        console.log("Hello World!");
    }
 };

 pessoa.ola();

// Métodos de objetos

// Esta seção explica um pouco mais sobre métodos 
// universais de objetos que são definidos em Object.
// prototype, mas que devem ser substituídos por outras 
// implementações mais especializadas. A seguir, temos 
// alguns exemplos desses métodos para utilização em objetos.

// toString()

//  O método toString() não recebe argumentos; ele retorna um
//  string que de alguma forma representa o valor do objeto 
//  no qual ele é invocado. Este método é invocado sempre que 
//  é preciso converter o objeto em uma string.

// toLocaleString()

// A finalidade desse método é retornar uma representação de 
// string localizada do objeto. O método padrão toLocaleString()
// definido por Object não faz nenhuma localização: ele 
// simplesmente chama toString() e retorna esse valor.

let point = {
    x: 1000,
    y: 2000
 } 

 point.toString();        // 1000 2000
 point.toLocaleString();  // 1,000 2,000

//  valuefOf()

//  O método valueOf() é muito parecido com o método 
//  toString(), mas é chamado quando o JavaScript precisa 
//  converter um objeto em algum tipo primitivo diferente 
//  de uma string, normalmente um número. Este método é 
//  chamado automaticamente se um objeto é usado em um 
//  contexto no qual um valor primitivo é necessário.

// toJSON()

// O método toJSON() retorna uma representação em JSON das 
// propriedades de um objeto.

let point2 = {
    x: 1000,
    y: 2000
 }; 

 JSON.stringify([point2]);   // ‘["(1, 2)"]’