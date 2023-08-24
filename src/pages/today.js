import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addTaskToPage from '../ui/addTaskToPage';

export default function loadTodayPage() {
  createHeader();
  const data = localStorage.getItem('notes') || localStorage.getItem('tasks');

  if (!data) {
    // show no items saved in display if no data
    makeNewTaskDiv('items saved', 'to-do-container');
    dialogEvents();
  } else {
    addExistingDataToTodayPage('notes', 'toDo');
    dialogEvents();
  }
}

function addExistingDataToTodayPage(typeOne, typeTwo) {
  //get all of the users notes/tasks from LS
  const notes = getFromLocalStorage('notes');
  const tasks = getFromLocalStorage('toDo');

  if (notes) {
    notes.forEach((note) => {
      addTaskToPage(typeOne, note);
    });
  }

  if (tasks) {
    tasks.forEach((task) => {
      addTaskToPage(typeTwo, task);
    });
  }
}
