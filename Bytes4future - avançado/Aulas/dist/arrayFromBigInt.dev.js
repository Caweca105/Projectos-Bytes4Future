"use strict";

function arrayFromBigInt(arr) {
  var array = [];
  var string = arr.toString;

  for (var i = 0; i < string.length; i++) {
    array.push(parseInt(string[i]));
  }

  return array;
}