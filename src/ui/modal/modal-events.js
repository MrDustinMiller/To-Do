import {
  addActiveAttribute,
  checkForActiveAttribute,
} from '../activeAttribute';
import loadModalTaskPage from './modal-task-page';
import loadModalProjectPage from './modal-project-page';
import loadModalNotesPage from './modal-note-page';

export default function modalEvents(newModal, container) {
  const modalSidebarLinks = document.querySelectorAll('.modal-link');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  modalSidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      checkForActiveAttribute(modalSidebarLinks);
      addActiveAttribute(e);
      checkWichModalSidebarLinkIsClicked(e);
    });
  });

  newModal.addEventListener('close', () => {
    container.removeChild(newModal);
  });

  modalCloseBtn.addEventListener('click', () => {
    container.removeChild(newModal);
  });
}

function checkWichModalSidebarLinkIsClicked(link) {
  switch (link.target.textContent) {
    case 'Task':
      loadModalTaskPage();
      break;
    case 'Project':
      loadModalProjectPage();
      break;
    case 'Note':
      loadModalNotesPage();
      break;

    default:
      break;
  }
}
