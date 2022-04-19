//Definimos uma função, mixedNumbers, na qual estamos passando o array como um argumento. Modifique a função usando push() e unshift() para adicionar 'I', 2, 'three' no início do array e 7, 'VIII', 9 ao final para que o array retornado contenha a representação dos números de 1 a 9 em ordem.

function mixedNumbers(arr) {
    // Altere apenas o código abaixo desta linha
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9)
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));