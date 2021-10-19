"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/tasks'),
    getAllTasks = _require.getAllTasks,
    createTask = _require.createTask,
    getTask = _require.getTask,
    updateTask = _require.updateTask,
    deleteTask = _require.deleteTask;

router.route('/').get(getAllTasks).post(createTask);
route.route('/:id').get(getTask).patch(updateTask)["delete"](deleteTask);
module.exports = router;