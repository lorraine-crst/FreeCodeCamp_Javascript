//Adicione o operador maior que para indicar as linhas indicadas para que as instruções de retorno façam sentido.

function testGreaterThan(val) {
    if (val >100) {  // Altere esta linha
      return "Over 100";
    }
  
    if (val >10) {  // Altere esta linha
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);