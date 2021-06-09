"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pawn = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pawn =
/*#__PURE__*/
function () {
  function Pawn(column, row, direction) {
    _classCallCheck(this, Pawn);

    this.column = column;
    this.row = row;
    this.direction = direction;
  }

  _createClass(Pawn, [{
    key: "possibleMoves",
    value: function possibleMoves() {}
  }]);

  return Pawn;
}();

exports.Pawn = Pawn;