//Definimos uma função, forecast, que recebe um array como argumento. Modifique a função usando slice() para extrair a informação do array passado como argumento e retorne um novo array contendo os elementos strings warm e sunny.

function forecast(arr) {
    // Altere apenas o código abaixo desta linha
  
    return arr.slice(2, 4);
  }
  
  // Altere apenas o código acima desta linha
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));