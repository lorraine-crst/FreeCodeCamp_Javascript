/*Modifique a função abTest para que se a ou b forem menores que 0 a função irá imediatamente terminar retornando o valor de undefined.

Dica
Lembre-se de que undefined é uma palavra-chave e não uma string.

 */

// Configuração
function abTest(a, b) {
    // Altere apenas o código abaixo desta linha
  
    if (a < 0 || b < 0) {
      return undefined;
    }
  
    // Altere apenas o código acima desta linha
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);