//Definimos uma função, htmlColorNames, a qual recebe um array de cores HTML como argumento. Modifique a função usando splice() para remover os dois primeiros elementos do array e adicionar 'DarkSalmon' e 'BlanchedAlmond' em seus respectivos lugares.


function htmlColorNames(arr) {
    // Altere apenas o código abaixo desta linha
    const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(startIndex, amountToDelete,'DarkSalmon', 'BlanchedAlmond');
  
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));