import loadTaskList from './pages/taskList';
import loadNotesPage from './pages/notes';
import loadProjectPage from './pages/projects';
import loadTodayPage from './pages/today';
import { wipeDomContent } from './ui/dom';
import {
  addActiveAttribute,
  checkForActiveAttribute,
} from './ui/activeAttribute';
import createNewDialogModal from './ui/modal/modal';

export default function addPageEventListeners() {
  const sidebarLinks = document.querySelectorAll('.link-item');

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.target.localName === 'li') {
        checkForActiveAttribute(sidebarLinks);
        wipeDomContent();
        addActiveAttribute(e);
        checkWhichSidebarLinkIsClicked(e, sidebarLinks);
      }
    });
  });
}

function checkWhichSidebarLinkIsClicked(e, sidebarLinks) {
  switch (e.target.textContent) {
    case 'Today':
      loadTodayPage();
      break;
    case 'Task List':
      loadTaskList();
      break;
    case 'Projects':
      loadProjectPage();
      break;
    case 'Notes':
      loadNotesPage();
      break;
    default:
      break;
  }
}

export function dialogEvents() {
  const newContentButtons = document.querySelectorAll('.new-content');

  newContentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      createNewDialogModal();
    });
  });
}
