import { wipeModalContent } from '../dom';
import buildModalDueDateDiv from './due-date';
import buildModalTextArea from './text-area';
import buildModalAddTaskButton from './modal-add-button';

export default function loadModalNotesPage() {
  // if it exists then dont build the page because its open already, just return
  if (document.querySelector('.modal-notes-text-area')) return;

  const modalMainContent = document.querySelector('.modal-new-content-div');
  wipeModalContent(modalMainContent);
  buildModalTextArea(
    'modal-notes-text-area',
    'Example: Grocery List, school notes.',
    modalMainContent
  );
  buildModalDueDateDiv(modalMainContent);
  buildModalAddTaskButton(modalMainContent, 'modal-add-note-btn', 'Add Note');
}
