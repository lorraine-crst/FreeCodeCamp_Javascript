//Adicione o operador de desigualdade != na instrução if para que a função retorne a string Not Equal quando val não for equivalente a 99.

// Configuração
function testNotEqual(val) {
    if (val!=99) { // Altere esta linha
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);