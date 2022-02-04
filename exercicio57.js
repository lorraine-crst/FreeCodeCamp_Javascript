/*Escreva a função nextInLine, que recebe um array (arr) e um número (item) como argumentos.

Adicione o número no final do array e então remova o primeiro elemento do array.

A função nextInLine deve, em seguida, retornar o elemento que foi removido. */

function nextInLine(arr, item) {
    // Altere apenas o código abaixo desta linha
    arr.push(item);
    var removed = arr.shift();
    return removed;
    // Altere apenas o código acima desta linha
  }
  
  // Configuração
  const testArr = [1, 2, 3, 4, 5];
  
  // Exibir o código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));