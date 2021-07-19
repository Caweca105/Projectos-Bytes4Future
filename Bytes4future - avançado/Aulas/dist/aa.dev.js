"use strict";

function stringSuperReduzida(str) {
  // Escreve aqui o teu código
  var noRepeat = false;
  var array = Array.from(str);

  while (noRepeat === false) {
    noRepeat = true;

    for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        array[i] = "";
        array[i + 1] = "";
        noRepeat = false;
      }
    }

    array = array.filter(function (e) {
      return e !== "";
    });
  }

  if (array.length === 0) {
    return "String Vazia";
  } else {
    return array.join("");
  }
}