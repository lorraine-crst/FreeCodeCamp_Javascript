/*Altere randomFraction para retornar um número aleatório ao invés de retornar 0. */

function randomFraction() {

    // Altere apenas o código abaixo desta linha
  
      var result = 0;
    // Math.random() can generate 0. We don't want to     return a 0,
    // so keep generating random numbers until we get one     that isn't 0
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
  
    // Altere apenas o código acima desta linha
  }