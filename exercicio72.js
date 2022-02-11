//Converta a lógica para usar instruções else if.

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else{
    return "Between 5 and 10";
    }
  }
  
  testElseIf(7);