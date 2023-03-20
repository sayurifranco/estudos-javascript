// Com essas estruturas de repetição em mente, 
// podemos pensar em códigos para gerar números 
// pares dentro de um intervalo, executar um código 
// até que uma condição seja satisfeita etc. 
// Um exemplo utilizando while para imprimir os 
// números pares até 100 é:

let cont = 2;

while (cont < 100) {
    if (cont % 2 == 0){
        console.log(cont);
    }
    cont = cont + 1;
};

