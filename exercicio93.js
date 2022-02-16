//Acesse o objeto myStorage e atribua o conteúdo da propriedade glove box para a variável gloveBoxContents. Use notação de ponto para todas as propriedades sempre que possível, caso contrário, use a notação de colchetes.

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  var gloveBoxContents = myStorage.car.inside["glove box"];
  