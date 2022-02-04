/*Usando let ou const, declare uma variável global chamada myGlobal fora de qualquer função. Inicialize-a com o valor de 10.

Dentro da função fun1, atribua 5 para oopsGlobal sem usar as palavras-chave let ou const. */

// Declare a variável myGlobal abaixo desta linha
let myGlobal= 10;

function fun1() {
  // Atribua 5 para oopsGlobal aqui
  oopsGlobal = 5;
}

// Altere apenas o código acima desta linha

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}