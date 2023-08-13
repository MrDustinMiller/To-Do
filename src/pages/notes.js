import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addTaskToPage from '../ui/addTaskToPage';

export default function loadNotesPage() {
  createHeader();
  const notes = localStorage.getItem('notes');

  // if false we have no existing notes so make a task container so user can make some new notes
  if (!notes) {
    makeNewTaskDiv('notes', 'task-container');
    dialogEvents();
  } else {
    addExistingNotesToPage('notes');
    dialogEvents();
  }
}

function addExistingNotesToPage(type) {
  // get all of the users notes from LS
  const notes = getFromLocalStorage('notes');

  notes.forEach((note) => {
    addTaskToPage(type, note);
  });
}
