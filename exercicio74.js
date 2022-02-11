/*Escreva instruções encadeadas if/else if para atender às seguintes condições:

num < 5 - retorna Tiny
num < 10 - retorna Small
num < 15 - retorna Medium
num < 20 - retorna Large
num >= 20 - retorna Huge
*/

function testSize(num) {
    // Altere apenas o código abaixo desta linha
  if (num < 5) {
        return "Tiny";
      } else if (num < 10) {
        return "Small";
      } else if (num < 15) {
        return "Medium";
      } else if (num < 20) {
        return "Large";
      } else {
        return "Huge";
      }
    return "Change Me";
    // Altere apenas o código acima desta linha
  }
  
  testSize(7);
