async function sleep(tempo) {
    return new Promise(resolve => setTimeout(resolve,tempo))
}
console.log("Começando a preparar o ovo");

(async () => {
    await sleep(3000) // esperar por 3 segundos para imprimir comando 1
    console.log("Ovo está cozido");
})()

console.log("Tomar banho"); // programação assíncrona

// wait = espere
// await = esperar pela promise ser resolvida ou finalizada 
// para ir para a próxima

// await só pode ser usada dentro de função assíncrona