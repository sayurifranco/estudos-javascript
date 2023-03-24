const aluno = {
    nome: "João",
    email: "joao@gmail.com",
    dataNascimento: "1995/05/28",
    sexo: "masculino",
    cidade: "João Pessoa",
    matrícula: "123456789",
 
    detalhes: function() {
    console.log(this.matrícula, this.nome, this.email, this.dataNascimento, this.sexo, this.cidade);
    }
}

// detalhes é um método

aluno.detalhes();