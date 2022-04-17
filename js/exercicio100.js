//Declare e inicialize uma variável total como 0. Use um laço for para adicionar o valor de cada elemento do array myArr para total.

// Configuração
const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = myArr.length - 1; i >= 0; i--) {
  total += myArr[i];
}
// Altere apenas o código abaixo desta linha