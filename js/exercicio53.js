/*O editor possui dois console.log para ajudar você a ver o que está acontecendo. Verifique o console enquanto codifica para ver como muda. Declare uma variável local myVar dentro de myLocalScope e rode os testes.

Observação: o console ainda exibirá ReferenceError: myVar is not defined, mas isso não causará falha nos testes. */

function myLocalScope() {
    // Altere apenas o código abaixo desta linha
    var myVar
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Executar e verificar o console
  // myVar não está definida fora do myLocalScope
  console.log('outside myLocalScope', myVar);