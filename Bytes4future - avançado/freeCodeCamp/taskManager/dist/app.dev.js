"use strict";

var express = require('express');

var app = express();

var tasks = require('./routes/tasks'); //middleware 


app.use(express.json()); //routes

app.get('/hello', function (req, res) {
  res.send('Task Manager App');
});
app.use('/api/v1/tasks', tasks);
var port = 3000;
app.listen(port, console.log("Cam\xF5es est\xE1 a ouvir-te na porta ".concat(port, "...")));