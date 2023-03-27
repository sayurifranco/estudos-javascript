class Retangulo {
    constructor(altura, largura){
    this.largura = largura;
    this.altura = altura;
    }

    calculaArea() {
        return this.altura * this.largura;
    } // this referencia os parâmetros da própria classe
}

let ret_1 = new Retangulo(2, 3);

console.log('A altura do retangulo 1 é: ' + ret_1.altura);
console.log('A largura do retangulo 1 é: ' + ret_1.largura);
console.log("A área do retangulo 1 é: " + ret_1.calculaArea());