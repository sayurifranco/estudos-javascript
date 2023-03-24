class Objeto {
    constructor(altura, largura) {
        this.altura = altura; 
        this.largura = largura;
    } 
    // this faz referência à classe. 
    // Garante que existe dentro do escopo

    get area() {
        return this.calculaArea()
    } // método get area retorna função calculaArea

    calculaArea(){
        return this.altura * this.largura;
    } // função
}

const quadrado = new Objeto(10, 10);
// quadrado = instância de objeto forma geométrica

console.log(quadrado.area);
// area é um método

const retangulo = new Objeto(15, 10);

console.log(retangulo.area);