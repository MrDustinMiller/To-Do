import { wipeModalContent } from '../dom';
import buildModalDueDateDiv from './due-date';
import buildModalTextArea from './text-area';

export default function loadModalNotesPage() {
  const modalMainContent = document.querySelector('.modal-new-content-div');

  wipeModalContent(modalMainContent);
  buildModalTextArea(
    'modal-notes-text-area',
    'Example: Grocery List, school notes.',
    modalMainContent
  );
  buildModalDueDateDiv(modalMainContent);

  const addNewNoteBtnOnNoteModalPage = document.createElement('button');
  addNewNoteBtnOnNoteModalPage.classList.add('modal-add-note-btn');
  addNewNoteBtnOnNoteModalPage.classList.add('modal-btn');
  addNewNoteBtnOnNoteModalPage.textContent = 'Add Note';
  modalMainContent.appendChild(addNewNoteBtnOnNoteModalPage);
}
