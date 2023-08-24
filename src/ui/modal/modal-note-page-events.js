import { captureModalNotePageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';
import { checkForNoTaskMessage } from '../dom';

export default function modalTaskNotesEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const main = document.querySelector('.main-right');
  const noTaskContainer = document.querySelector('.to-do-container');

  // capture todo object in task variable
  modalAddButton.addEventListener('click', () => {
    const task = captureModalNotePageData();
    checkForNoTaskMessage();
    addToDo('notes', task);
    removeModal();
    if (noTaskContainer) {
      main.removeChild(noTaskContainer);
    }
  });
}
