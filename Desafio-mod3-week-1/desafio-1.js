/*FRETE GRATIS menos de 50k
  bota custa 10 reais
  calça custa 30 reais  
  frete acima de 50km = 100 reais
*/

let produto1 = "bota";
let precoProduto1 = 10;
let produto2 = "calça";
let precoProduto2 = 30;
let distanciaEndereco = 51;
let frete = 100;
let distanciaFreteGratis = 50;

console.log("distanciaEndereco <= 50", distanciaEndereco <= 50)
    if (distanciaEndereco <= distanciaFreteGratis){
        console.log("entrou no if")
        frete = 0;
    } else {
        console.log("entrou no else")
        frete = 100;
    }

let precoSomadoProduto = precoProduto1 + precoProduto2;

console.log("Valor do Produto:",precoSomadoProduto);

let valorFinal = precoSomadoProduto + frete;

console.log("Valor Final:", valorFinal);