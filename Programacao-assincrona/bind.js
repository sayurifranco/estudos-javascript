// O principal objetivo do método bind é alterar o contexto 
// this() de uma função, independentemente de onde ela esteja 
// sendo chamada. 

// Para utilizar esse método de maneira correta, é preciso 
// lembrar da ideia de escopo de variável e saber onde uma 
// variável, constante ou objeto tem seu valor levado em 
// consideração.

// É muito comum ocorrer a transformação do this conforme 
// são efetuadas novas chamadas de métodos, e que seja esperado 
// um determinado valor para o contexto. Em alguns casos, porém,
// nos deparamos com um this muitas vezes inesperado ou 
// undefined, seja por falta de referência do valor ou passagem 
// de um parâmetro.

function usuario() {
    console.log(this.nome)
}

usuario();

// Ao chamar a função usuário, obtemos undefined como resultado,
// isso porque dentro da função existe um this.nome, ou seja, 
// uma propriedade local, porém sem referência alguma do que 
// deve ser escrito na hora. 

// Para resolver o problema de falta de referência ou 
// propriedade correta, podemos utilizar o método bind da 
// seguinte maneira:

function usuario() {
  console.log(this.nome);
}

let aluno = {
  nome: 'Assis'
}

let usuarioAluno = usuario.bind(aluno);

usuarioAluno(); // => "Assis"

// A utilização do bind permite associar um contexto para uma 
// função e assim conseguimos acessar propriedades que - num 
// primeiro momento - não estão definidas no método original.