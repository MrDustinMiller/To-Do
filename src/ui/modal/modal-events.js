import {
  addActiveAttribute,
  checkForActiveAttribute,
} from '../activeAttribute';
import loadModalTaskPage from './modal-task-page';
import loadModalProjectPage from './modal-project-page';
import loadModalNotesPage from './modal-note-page';
import removeModal from './removeModal';

export default function modalEvents() {
  const modalSidebarLinks = document.querySelectorAll('.modal-link');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const newModal = document.querySelector('.new-modal');

  modalSidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      checkForActiveAttribute(modalSidebarLinks);
      addActiveAttribute(e);
      checkWichModalSidebarLinkIsClicked(e);
    });
  });

  newModal.addEventListener('close', () => {
    removeModal();
  });

  modalCloseBtn.addEventListener('click', () => {
    removeModal();
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
