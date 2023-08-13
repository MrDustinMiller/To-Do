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
  // events for sidebarlink + individual project pages
  const sidebarLinks = document.querySelectorAll('.link-item');
  const addNewProjectsBtn = document.querySelector('.add-project-btn');

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      checkForActiveAttribute(sidebarLinks);
      wipeDomContent();
      addActiveAttribute(e);
      checkWhichSidebarLinkIsClicked(e);
    });
  });

  addNewProjectsBtn.addEventListener('click', () => {
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
    case 'Notes':
      loadNotesPage();
      break;
    // our default will be individual projects that are clicked if not any of the abvoe
    default:
      loadProjectPage();
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
