const produto = { id : 1, nome : 'Grampo', preco : 34.7 }  //EXEMPLO DE TRATATIVA DE EXCESSÃO - ERRO
 
 const produtoFreeze = Object.freeze(produto) 
 
 produtoFreeze.preco = null 

 try {
    
    console.log("LINHA 15" + produtoFreeze.preco) // 34.7
    onsole.log("GLINHA 16" + produtoFreeze.peco) // 34.7
    
  }
  catch(e) {
    console.log("FALHA DETECTADA ") // 
  }
