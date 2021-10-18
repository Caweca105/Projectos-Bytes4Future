"use strict";

var express = require('express');

var app = express(); //routes

app.get('/hello', function (req, res) {
  res.send('Task Manager App');
});
var port = 3000;
app.listen(port, console.log("Cam\xF5es est\xE1 a ouvir-te na porta ".concat(port, "...")));