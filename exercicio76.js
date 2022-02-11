/*Escreva uma instrução switch que testa val e define answer para as seguintes condições:
1 - alpha
2 - beta
3 - gamma
4 - delta
 */

function caseInSwitch(val) {
    let answer = "";
    // Altere apenas o código abaixo desta linha
  switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    // Altere apenas o código acima desta linha
    return answer;
  }
  
  caseInSwitch(1);