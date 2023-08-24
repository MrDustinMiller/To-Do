import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addTaskToPage from '../ui/addTaskToPage';
import { deleteTaskFromLocalStorage } from '../localStorage';
import { removeTaskFromDom } from '../ui/dom';

// run when link is clicked
export default function loadNotesPage() {
  createHeader();
  const notes = localStorage.getItem('notes');

  // if false we have no existing notes so make a task container so user can make some new notes
  if (!notes) {
    makeNewTaskDiv('notes', 'to-do-container');
    dialogEvents();
  } else {
    addExistingNotesToPage('notes');
    dialogEvents();
  }

  // const deleteNoteBtn = document.querySelector('.note-close-btn');
  // deleteNoteBtn.addEventListener('click', (e) => {
  //   // gets us our note title
  //   const noteTitle = e.target.parentElement.textContent;
  //   removeTaskFromDom(,noteTitle)
  // });
}

function addExistingNotesToPage(type) {
  // get all of the users notes from LS
  const notes = getFromLocalStorage('notes');

  notes.forEach((note) => {
    addTaskToPage(type, note);
  });
}
