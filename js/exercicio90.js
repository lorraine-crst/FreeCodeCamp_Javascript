//Converta a instrução switch em um objeto chamado lookup. Use-o para pesquisar por val e atribua a string associada para a variável result.

// Configuração
// Configuração
function phoneticLookup(val) {
    let result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  
    // Altere apenas o código abaixo desta linha
    result = lookup[val];
    // Altere apenas o código acima desta linha
    return result;
  }
  
  phoneticLookup("charlie");