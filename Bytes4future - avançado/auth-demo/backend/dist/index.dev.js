"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3001;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.status(200).json({
    message: "Working"
  });
});
app.get("/user", function (req, res) {
  var auth = req.headers.authorization;
  console.log(auth);

  if (auth) {
    if (sessions.includes(parseInt(auth))) {
      res.status(200).json({
        message: auth
      });
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(401);
  }
});
app.listen();