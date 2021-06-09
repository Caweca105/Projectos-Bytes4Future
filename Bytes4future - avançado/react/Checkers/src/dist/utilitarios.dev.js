"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = isOdd;
exports.getKeyByValue = getKeyByValue;
exports.getColAsInt = getColAsInt;
exports.getColAsAlph = getColAsAlph;
exports.getRowAsInt = getRowAsInt;
exports.returnPlayerName = returnPlayerName;

function isOdd(n) {
  return Math.abs(n % 2) === 1;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
}

function getColAsInt(columns, coordinate) {
  return columns[coordinate.charAt(0)];
}

function getColAsAlph(columns, columnInt) {
  for (var key in columns) {
    if (!columns.hasOwnProperty(key)) {
      continue;
    }

    if (columnInt === columns[key]) {
      return key;
    }
  }

  return false;
}

function getRowAsInt(coordinate) {
  return parseInt(coordinate.charAt(1), 10);
}

function returnPlayerName(playerBool) {
  return playerBool === true ? 'player1' : 'player2';
}