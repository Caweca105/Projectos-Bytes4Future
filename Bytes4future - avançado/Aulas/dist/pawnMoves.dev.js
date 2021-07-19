"use strict";

function computePawnMoves(board, position) {
  var player = determinePlayer(board, position);
  var multiplier = determinePlayerDirectionMultiplier(player);
  var moves = [];
  var oneForward = addDirectionToPosition(position, {
    line: 1,
    column: 0
  }, multiplier);

  if (isEmpty(board, oneForward)) {
    moves.push(oneForward);
    var twoForward = addDirectionToPosition(position, {
      line: 2,
      column: 0
    }, multiplier);

    if (isFirstMove(board, position) && isEmpty(board, twoForward)) {
      moves.push(twoForward);
    }
  }

  var diagonalRight = addDirectionToPosition(position, {
    line: 1,
    column: -1
  }, multiplier);

  if (isEnemy(board, diagonalRight, player)) {
    moves.push(diagonalRight);
  }

  var diagonalLeft = addDirectionToPosition(position, {
    line: 1,
    column: 1
  }, multiplier);

  if (isEnemy(board, diagonalLeft, player)) {
    moves.push(diagonalLeft);
  }

  return moves;
}

function determinePlayerDirectionMultiplier(player) {
  return player === 'w' ? 1 : -1;
}

function determinePlayer(board, position) {
  return board[position.line][position.column][0];
}

function addDirectionToPosition(position, direction, multiplier) {
  return {
    line: position.line + direction.line * multiplier,
    column: position.column + direction.column * multiplier
  };
}

function isFirstMove(board, position) {
  var player = determinePlayer(board, position);
  return player === 'w' && position.line === 1 || player === 'b' && position.line === 6;
}

function isEmpty(board, position) {
  return board[position.line][position.column] === "";
}

function isEnemy(board, position, player) {
  return board[position.line][position.column] !== "" && determinePlayer(board, position) !== player;
} // position é um objeto: { line, column }
// board é uma matriz que representa um tabuleiro de xadrez
// todas as peças têm 2letras: 
//  a primeira é o jogador (b ou w) 
//  a segunda é a peça
// por exemplo bp é um peão preto (black pawn)
// os peões brancos começam na linha 1 (0-7)
// os peões pretos começam na linha 6 (0-7)