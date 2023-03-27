function soma(numero_1, numero_2) {
    const resultado = numero_1 + numero_2;
    console.log("O resultado da soma é: ", resultado)
 }

 console.log(resultado);

// ReferenceError: resultado is not defined
//  at Object.<anonymous> ←[90m(C:\Users\vmarc\Documents\git\estudos-javascript\Funcoes\←[39mescopo.js:6:14←[90m)←[39m
//     ←[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)←[39m
//     ←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)←[39m
//     ←[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)←[39m
//     ←[90m    at Module._load (node:internal/modules/cjs/loader:958:12)←[39m
//     ←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
//     ←[90m    at node:internal/main/run_main_module:23:47←[39m