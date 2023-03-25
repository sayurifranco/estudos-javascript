const objeto_aqui = { nome: 'testeNome', sobrenome: 'testeSobrenome' }; 

 
 console.log("O que está em nome é = " + objeto_aqui.nome + "\n") // 
 console.log("O que está em sobrenome é = " + objeto_aqui.sobrenome + "\n") // uma vez criado basta extrair o conteudo 

 Object.keys(objeto_aqui).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, objeto_aqui[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
