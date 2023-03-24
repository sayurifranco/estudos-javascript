// Escopo de uma variável define o limite de alcance que um 
// determinado elemento tem, ou até por onde um determinado 
// elemento pode ser alcançado. Por exemplo, se criarmos uma 
// variável local dentro de uma função, esta variável só poderá
// ser utilizada por esta função. Outras funções ou comandos 
// fora da função inicial não poderão chegar até esta variável.

// Para visualizar melhor como funciona essa área de escopo, 
// considere o código abaixo:

let cor = "verde";

function exibirCor(){
    cor; // se fosse var cor, o resultado é undefined
    console.log(cor);    
}
exibirCor();    // chamamos a função para exibir o conteúdo da variável

// É importante entender o escopo para que não tenhamos 
// problemas na hora de saber se uma variável que tem seu 
// valor alterado dentro de uma função terá o mesmo valor 
// fora da função.

// No código acima, a declaração da variável cor dentro da 
// função exibirCor() faz com que o valor definido 
// anteriormente, fora da função, seja substituído e passe 
// a receber a atribuição contida dentro da função.