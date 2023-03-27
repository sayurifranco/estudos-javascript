// Como atividade, vamos criar duas classes: Usuario.js e 
// Admin.js. Para a codificação delas siga os passos descritos
// abaixo:

// Classe Usuario.js

// Crie a classe Usuario.js contendo um método construtor para
// três atributos: nome, email e tipo

// Crie o método visualizar() e retorne os valores de cada um 
// desses atributos
// Para testar a classe, instancie um objeto informando os 
// atributos e atribuindo isso a uma variável
// Ex: const usuario = new Usuario(...);

// Visualize o resultado no terminal usando o comando 
// console.log()

class Usuario {
    constructor (nome, email, tipo) {
        this.nome = nome;
        this.email = email;
        this.tipo = tipo;
    }

    visualizar() {
        console.log(this.nome, this.email, this.tipo);
        return this.nome, this.email, this.tipo;
    }

    retornaNome(){
        return this.nome;
    }

    retornaEmail(){
        return this.email;
    }

    retornaTipo(){
        return this.tipo;
    }
}

let usuario_1 = new Usuario('Marcos', 'marcos@gmail.com', 1);

console.log(usuario_1);

console.log('O usuário 1 é: ' + usuario_1.nome);
console.log('O email do usuário 1 é: ' + usuario_1.email);
console.log('O tipo do usuário 1 é: ' + usuario_1.tipo);

usuario_1.visualizar();

const nomeUsuario_1 = usuario_1.retornaNome();
const emailUsuario_1 = usuario_1.retornaEmail();
const tipoUsuario_1 = usuario_1.retornaTipo();

module.exports = Usuario