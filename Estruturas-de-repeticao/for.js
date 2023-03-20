// For

O for também se encaixa na categoria de estrutura de 
repetição, executando um determinado trecho de código até 
que uma condição seja satisfeita. A sua sintaxe é assim:

for (inicialização; condição; incremento) {
    código
 };

// Exemplo 1

Vamos pegar o código anterior como exemplo e reescrevê-lo 
utilizando for.

for (let i=2; i<100; i++) {
    if(i % 2 == 0)
        console.log(i);
 };

// Na mesma linha, iniciamos a variável com valor 2 (i=2), 
// informamos que a condição é a de que o número seja menor 
// que 100 (i<100), e a cada iteração é somado 1 ao valor da 
// variável (i++). Isso é o mesmo que utilizar i = i + 1.

// Exemplo 2

Agora vamos utilizar a estrutura for dentro de um array e 
utilizar a função length na condição de comparação.

const valores = [100, 200, 300, 400, 500];

 for (let i = 0; i < valores.length; i++) {
    console.log("Indice:", i, "Valor:", valores[i]); 
 }

// Resultado
Indice 0 Valor 100
Indice 1 Valor 200
Indice 2 Valor 300
Indice 3 Valor 400
Indice 4 Valor 500