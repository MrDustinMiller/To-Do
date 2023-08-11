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
  const projectsLink = document.querySelector('.add-project-btn');

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      checkForActiveAttribute(sidebarLinks);
      wipeDomContent();
      addActiveAttribute(e);
      checkWhichSidebarLinkIsClicked(e);
    });
  });

  projectsLink.addEventListener('click', () => {
    // open modal when user clicks on add project
    createNewDialogModal();
  });
}

function checkWhichSidebarLinkIsClicked(e) {
  switch (e.target.textContent) {
    case 'Today':
      loadTodayPage();
      break;
    case 'Task List':
      loadTaskList();
      break;
    // case 'Add Project':
    //   loadProjectPage();
    //   dialogEvents();
    //   //  load header and modal
    //   break;
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
