"use strict";

var getAllTasks = function getAllTasks(req, res) {
  res.send('all items from the file');
};

var createTask = function createTask(req, res) {
  res.send('create task');
};

var getTask = function getTask(req, res) {
  res.send('get single task');
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