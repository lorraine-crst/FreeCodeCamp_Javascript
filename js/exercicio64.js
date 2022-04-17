//Adicione o operador de desigualdade estrita ao comando if para que a função retorne a string Not Equal quando val não é estritamente igual a 17

// Configuração
function testStrictNotEqual(val) {
    if (val!== 17) { // Altere esta linha
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);