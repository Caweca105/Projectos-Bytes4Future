"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var JogoDasDamas =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JogoDasDamas, _React$Component);

  //ToDO
  // [] Criar Tabuleiro
  // [] Visualizar Tabuleiro
  // [] Adicionar React ao tabuleiro
  // [] Implementar como as peças se movem (diagonais)
  // [] Implementar a dama (depois ela move-se em mais direções)
  // [] Verificar se jogo acabou
  //    [] Quando a ultima peça está presa
  //    [] Quando já não existem mais peças numa certa equipa 
  // [] Implementar o Vencedor
  // [] Implementar o Reset do Jogo
  function JogoDasDamas(props) {
    var _this;

    _classCallCheck(this, JogoDasDamas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JogoDasDamas).call(this, props));
    _this.state = {
      tabuleiro: [["x", "", "x", "", "x", "", "x", ""], ["", "x", "", "x", "", "x", "", "x"], ["x", "", "x", "", "x", "", "x", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["o", "", "o", "", "o", "", "o", ""], ["", "o", "", "o", "", "o", "", "o"], ["o", "", "o", "", "o", "", "o", ""]]
    };
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JogoDasDamas, [{
    key: "clear",
    value: function clear() {
      this.setState({
        tabuleiro: [["", "o", " ", "o", " ", "o", " ", "o"], ["o", "", "o", "", "o", "", "o", ""], [" ", "o", " ", "o", " ", "o", " ", "o"], [" ", "", " ", " ", " ", " ", " ", " "], [" ", "", " ", " ", " ", " ", " ", " "], ["x", "", "x", " ", "x", " ", "x", " "], [" ", "x", " ", "x", " ", "x", " ", "x"], ["x", "", "x", " ", "x", " ", "x", " "]]
      });
    }
  }]);

  return JogoDasDamas;
}(_react["default"].Component);

var _default = JogoDasDamas;
exports["default"] = _default;