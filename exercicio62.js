//A função compareEquality no editor compara dois valores usando o operador de igualdade. Modifique a função para que ela retorne a string Equal apenas quando os valores forem estritamente iguais.

// Configuração
function compareEquality(a, b) {
    if (a === 'b') { // Altere esta linha
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");