"use strict";

var taskIDDOM = document.querySelector('.task-edit-id');
var taskNameDOM = document.querySelector('.task-edit-name');
var taskCompletedDOM = document.querySelector('.task-edit-completed');
var editFormDOM = document.querySelector('.single-task-form');
var editBtnDOM = document.querySelector('.task-edit-btn');
var formAlertDOM = document.querySelector('.form-alert');
var params = window.location.search;
var id = new URLSearchParams(params).get('id');
var tempName;

var showTask = function showTask() {
  var _ref, task, taskID, completed, name;

  return regeneratorRuntime.async(function showTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("/api/v1/tasks/".concat(id)));

        case 3:
          _ref = _context.sent;
          task = _ref.data.task;
          taskID = task._id, completed = task.completed, name = task.name;
          taskIDDOM.textContent = taskID;
          taskNameDOM.value = name;
          tempName = name;

          if (completed) {
            taskCompletedDOM.checked = true;
          }

          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

showTask();
editFormDOM.addEventListener('submit', function _callee(e) {
  var taskName, taskCompleted, _ref2, task, taskID, completed, name;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          editBtnDOM.textContent = 'Loading...';
          e.preventDefault();
          _context2.prev = 2;
          taskName = taskNameDOM.value;
          taskCompleted = taskCompletedDOM.checked;
          _context2.next = 7;
          return regeneratorRuntime.awrap(axios.patch("/api/v1/tasks/".concat(id), {
            name: taskName,
            completed: taskCompleted
          }));

        case 7:
          _ref2 = _context2.sent;
          task = _ref2.data.task;
          taskID = task._id, completed = task.completed, name = task.name;
          taskIDDOM.textContent = taskID;
          taskNameDOM.value = name;
          tempName = name;

          if (completed) {
            taskCompletedDOM.checked = true;
          }

          formAlertDOM.style.display = 'block';
          formAlertDOM.textContent = "success, edited task";
          formAlertDOM.classList.add('text-success');
          _context2.next = 25;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](2);
          console.error(_context2.t0);
          taskNameDOM.value = tempName;
          formAlertDOM.style.display = 'block';
          formAlertDOM.innerHTML = "error, please try again";

        case 25:
          editBtnDOM.textContent = 'Edit';
          setTimeout(function () {
            formAlertDOM.style.display = 'none';
            formAlertDOM.classList.remove('text-success');
          }, 3000);

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 19]]);
});