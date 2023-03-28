// Programação assíncrona consiste em executar uma tarefa em 
// "segundo plano". O comportamento natural da linguagem 
// Javascript é executar um comando após o outro, de maneira
// sequencial. Para que possamos rodar um comando fora dessa
// linha principal de execução, precisamos utilizar funções
// e métodos específicos para este fim.

// Se executarmos o código a seguir, será possível perceber 
// que as linhas serão executadas uma após a outra, ou seja, 
// de maneira síncrona.

let pessoa = {
    nome: "Ana", 
    sobrenome: "Beatriz",
    cpf: 00297415845
 };

console.log(pessoa.nome);

// Acontece que eventualmente podemos ter a necessidade de 
// executar um código e esse código precisar de uma resposta 
// para continuar o correto andamento, mas essa resposta não 
// está disponível no momento. Ao mesmo tempo em que é preciso 
// aguardar a requisição e resposta (de uma API, por exemplo), 
// não podemos bloquear o funcionamento de todo o nosso 
// programa.

// Como exemplo prático, imagine que você acordou e vai 
// preparar o café da manhã. Você coloca um ovo para cozinhar
// e, enquanto espera, toma banho. Ao terminar, verifica se 
// o tempo de cozimento já terminou e, se sim, desliga o fogão.

// Percebe que não foi preciso esperar o término do cozimento 
// do ovo para que você pudesse tomar banho? Você poderia 
// esperar o ovo terminar de cozinhar, mas pôde aproveitar 
// melhor esse tempo para adiantar as suas atividades, não 
// é verdade?

// Em Javascript, também temos essa possibilidade por meio da 
// programação assíncrona. Executamos tarefas em paralelo para
// obter resultados distintos em um determinado ponto, mas que 
// contribuem para o correto andamento das atividades.