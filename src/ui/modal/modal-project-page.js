import { wipeModalContent } from '../dom';
import buildModalDueDateDiv from './due-date';
import buildModalTextArea from './text-area';
import buildModalAddTaskButton from './modal-add-button';
import modalTaskProjectEvents from './modal-project-page-events';

export default function loadModalProjectPage() {
  // if it exists then dont build the page because its open already, just return
  if (document.querySelector('.modal-project-text-area')) return;

  const modalMainContent = document.querySelector('.modal-new-content-div');
  wipeModalContent(modalMainContent);
  buildModalTextArea(
    'modal-project-text-area',
    'Title: Build new fence.',
    modalMainContent
  );
  buildModalAddTaskButton(
    modalMainContent,
    'modal-add-project-btn',
    'Add Project'
  );

  // call specific modal project page events
  modalTaskProjectEvents();
}
