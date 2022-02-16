//Modifique a função checkObj para verificar se um objeto passado para a função (obj) contém uma propriedade específica (checkProp). Se a propriedade for encontrada, retorne o valor da propriedade. Se não, retorne "Not Found".

function checkObj(obj, checkProp) {
    // Altere apenas o código abaixo desta linha
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    return "Change Me!";
    // Altere apenas o código acima desta linha
  }