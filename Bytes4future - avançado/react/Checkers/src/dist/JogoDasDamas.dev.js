"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./JogoDasDamas.css");

var _Damas = _interopRequireDefault(require("./Damas.js"));

var _Tabuleiro = _interopRequireDefault(require("./Tabuleiro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//ToDO
// [x] Criar Tabuleiro
// [o] Visualizar Tabuleiro
// [] Implementar como as peças se movem (diagonais)
// [] Implementar a dama (depois ela move-se em mais direções)
// [] Verificar se jogo acabou
//    [] Quando a ultima peça está presa
//    [] Quando já não existem mais peças numa certa equipa 
// [] Implementar o Vencedor
// [] Implementar o Reset do Jogo
var _default = JogoDasDamas;
exports["default"] = _default;