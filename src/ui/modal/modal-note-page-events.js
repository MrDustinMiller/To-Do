import { captureModalNotePageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';

export default function modalTaskNotesEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const main = document.querySelector('.main-right');
  const noTaskContainer = document.querySelector('.task-container');

  // capture todo object in task variable
  modalAddButton.addEventListener('click', () => {
    const task = captureModalNotePageData();
    addToDo('notes', task);
    removeModal();
    main.removeChild(noTaskContainer);
  });
}
