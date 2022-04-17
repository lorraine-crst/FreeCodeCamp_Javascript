//Crie uma função chamada randomRange que recebe um intervalo de myMin e myMax e retorne um número inteiro aleatório que é maior ou igual a myMin, e é menor ou igual a myMax.

function randomRange(myMin, myMax) {
    // Altere apenas o código abaixo desta linha
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Altere apenas o código acima desta linha
  }