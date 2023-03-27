// let carro = {
//     numeroPortas: 4,
//     cor: 'vermelho',
//     marca: 'Fiat',
//     combustível: 'Gasolina'
// }


// let carro = new Object();

// console.log(carro);

// carro.combustível = 'gasolina';

// console.log(carro.combustível);

class Carro {
    constructor(numeroPortas, cor, marca, combustível) {
        this.eixos = 2; // essa classe Carro sempre vai ter 2 eixos
        this.numeroPortas = numeroPortas;
        this.cor = cor;
        this.marca = marca;
        this.combustível = combustível;
    }
}

let uno = new Carro(2, 'amarelo', 'Fiat', 'flex');

console.log(uno);

console.log(uno.combustível);


