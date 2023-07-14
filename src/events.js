import loadTaskList from './pages/taskListPage';
import { wipeDomContent } from './ui/dom';
import {
  addActiveAttribute,
  checkForActiveAttribute,
} from './ui/activeAttribute';

export default function addEventListeners() {
  const todayPage = document.querySelector('.today');
  const taskListPage = document.querySelector('.task-list');
  const projectsPage = document.querySelector('.projects');
  const notesPage = document.querySelector('.notes');
  const linkArray = [todayPage, taskListPage, projectsPage, notesPage];

  todayPage.addEventListener('click', (e) => {
    checkForActiveAttribute(linkArray);
    wipeDomContent();
    addActiveAttribute(e);
  });

  taskListPage.addEventListener('click', (e) => {
    checkForActiveAttribute(linkArray);
    wipeDomContent();
    addActiveAttribute(e);
    loadTaskList();
  });

  projectsPage.addEventListener('click', (e) => {
    checkForActiveAttribute(linkArray);
    wipeDomContent();
    addActiveAttribute(e);
  });

  notesPage.addEventListener('click', (e) => {
    checkForActiveAttribute(linkArray);
    wipeDomContent();
    addActiveAttribute(e);
  });
}
