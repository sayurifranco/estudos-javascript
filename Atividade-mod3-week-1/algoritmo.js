/* Crie um algoritmo para efetuar a leitura de duas notas 
para um determinado aluno. 
Realize o cálculo da média aritmética, exiba a nota obtida 
na tela e verifique se a nota é maior ou menor que 6. 
Se for maior, exiba o texto “Aprovado”, se for menor, 
exiba “Reprovado”.*/

let nota1 = 5;
let nota2 = 4;

let mediaNotas = (nota1 + nota2)/2;

console.log ("Média das notas:", mediaNotas)

if (mediaNotas >= 6){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

