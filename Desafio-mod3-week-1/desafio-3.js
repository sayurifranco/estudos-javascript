/*FRETE GRATIS menos de 50km 
  FRETE GRATIS para mais de 250 reais no valor total dos produtos  
  bota custa 10 reais
  calça custa 30 reais  
  frete acima de 50km = 100 reais
  Desconto de 10% para compras acima de 1000 reais
*/

let produto1 = {
    nome : "bota",
    preco : 10
};

let produto2 = {
    nome : "calça",
    preco : 30
};

let produto3 = {
    nome : "blazer",
    preco : 3000
};

let precoSomadoProduto = produto1.preco + produto2.preco + produto3.preco;
console.log("Valor somado dos produtos: ", precoSomadoProduto);

let distanciaEndereco = 51;
let frete = 100;
let valorAPagar = 0;
let distanciaFreteGratis = 50;

console.log("distanciaEndereco <= 50", distanciaEndereco <= 50);
console.log("precoSomadoProduto >= 250", precoSomadoProduto >= 250);
    if (distanciaEndereco <= distanciaFreteGratis || precoSomadoProduto >= 250){
        console.log("entrou no if");
        frete = 0;
    } else {
        console.log("entrou no else");
        frete = 100;
    }

console.log("Valor do Produto:",precoSomadoProduto);

let valorFinal = precoSomadoProduto + frete;

console.log("Valor do frete: ", frete);

console.log("Valor Final:", valorFinal);

if (precoSomadoProduto >= 1000) {
    console.log("entrou no if");
    valorAPagar = valorFinal*0.9;
    console.log("Valor Final: ", valorAPagar); //ou console.log('Valor Final: ${valorAPagar}');

} else {
    console.log("entrou no else");
    valorAPagar = valorFinal;
    console.log("Valor Final: ", valorAPagar);
}

/* ou:

console.log("precoSomadoProduto >= 1000", precoSomadoProduto >= 1000)
let desconto = 0;
if (precoSomadoProduto >= 1000) {
    desconto = 0.1
}
 
if (desconto > 0) {
    desconto = (precoSomadoProduto + frete) * desconto
}

let valorFinal = precoSomadoProduto + frete - desconto
*/