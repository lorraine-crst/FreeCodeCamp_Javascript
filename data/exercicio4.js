//Nós definimos uma função, popShift, a qual recebe um array como argumento e retorna um novo array. Modifique a função, usando pop() e shift(), para remover o primeiro e o último elemento do array passado como argumento, e atribua os valores removidos para suas variáveis correspondentes, para que o array retornado contenha seus valores.

function popShift(arr) {
    let popped = arr.pop(); // Altere esta linha
    let shifted = arr.shift(); // Altere esta linha
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));