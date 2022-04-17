//Na função checkSign, use operadores de múltiplas condições - seguindo o formato recomendado usado em findGreaterOrEqual - para verificar se um número é positivo, negativo ou zero. A função deve retornar positive, negative ou zero.

function checkSign(num) {
    return num > 0 ? "positive"
      : num < 0 ? "negative"
      : "zero";
  }
  
  checkSign(10);