//Combine as duas instruções if em uma mesma instrução a qual retorna a string Outside se val não estiver entre 10 e 20, inclusos 10 e 20. Caso contrário, retorna a string Inside.

function testLogicalOr(val) {
    // Altere apenas o código abaixo desta linha
  
  if (val < 10 || val > 20) {
    return "Outside";
  }
    // Altere apenas o código acima desta linha
    return "Inside";
  }
  
  testLogicalOr(15);