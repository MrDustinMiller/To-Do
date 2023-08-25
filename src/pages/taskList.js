import makeNewTaskDiv from '../ui/noTasksMessage';
import createHeader from '../ui/header';
import { dialogEvents } from '../events';
import addTaskToPage from '../ui/addTaskToPage';
import { getFromLocalStorage } from '../localStorage';

// function is ran on page load and on link click
export default function loadTaskList() {
  createHeader();
  const toDo = getFromLocalStorage('toDo');

  // if false we have no existing to-do's so make a task container so user can make some new tasks
  if (!toDo) {
    makeNewTaskDiv('tasks', 'to-do-container');
    dialogEvents();
  } else {
    addExistingToDoToPage('toDo');
    dialogEvents();
  }
}

function addExistingToDoToPage(type) {
  // get all of the users tasks from LS
  const toDo = getFromLocalStorage('toDo');

  toDo.forEach((task) => {
    addTaskToPage(type, task);
  });
}
