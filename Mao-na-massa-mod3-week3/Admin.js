// Como atividade, vamos criar duas classes: Usuario.js e 
// Admin.js. Para a codificação delas siga os passos descritos
// abaixo:

// Classe Admin.js
// Crie a classe Admin.js contendo um método construtor para 
// nome, email e tipo. Aqui será preciso implementar herança 
// usando o termo extends para a classe e super para o 
// construtor
// Ex: class Admin extends Usuario {}
// Crie um método chamado criarCurso para exibir o nome de 
// um curso passado por parâmetro

// Para testar a classe, instancie um objeto informando os 
// atributos e atribuindo isso a uma variável

// Ex: const admin = new Admin(...);
// Visualize o resultado no terminal usando o comando 
// console.log()

// Lembre-se de fazer a importação necessária da classe 
// Usuario dentro da classe Admin. O foco deste exercício é 
// praticar criação de classes, manipulação de atributos e 
// métodos, instanciação de objetos e aplicação de herança.

const Usuario = require('./Usuario');

class Admin extends Usuario {
    constructor(nome, email, tipo) {
        super(nome, email, tipo);
    }

    criarCurso(nomeCurso) {
        console.log(`O curso ${nomeCurso} foi criado`);
    }
}

const admin = new Admin('Leo', 'l@gmail.com', 2)
admin.visualizar();
admin.criarCurso('Analista QA');