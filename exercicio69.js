//Substitua as duas instruções if por uma declaração, usando o operador &&, que vai retornar a string Yes se val for menor ou igual a 50 e maior ou igual a 25. Caso contrário, retornará a string No.

function testLogicalAnd(val) {
    // Altere apenas o código abaixo desta linha
  
     if (val <= 50 && val >= 25) {
      return "Yes";
    }
  
    // Altere apenas o código acima desta linha
    return "No";
  }
  
  testLogicalAnd(10);