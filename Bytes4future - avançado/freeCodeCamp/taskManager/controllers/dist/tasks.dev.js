"use strict";

var express = require('express');

var app = express();

var tasks = require('../routes/tasks');

var getAllTasks = function getAllTasks(req, res) {
  res.send('all items from the file');
};

var createTask = function createTask(req, res) {
  res.json(req.body);
};

var getTask = function getTask(req, res) {
  res.json({
    id: req.params.id
  });
};

var updateTask = function updateTask(req, res) {
  res.send('update task');
};

var deleteTask = function deleteTask(req, res) {
  res.send('delete task');
};

module.exports = {
  getAllTasks: getAllTasks,
  createTask: createTask,
  getTask: getTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};