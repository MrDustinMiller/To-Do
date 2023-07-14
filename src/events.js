import loadTaskList from './pages/taskList';
import loadNotesPage from './pages/notes';
import loadProjectPage from './pages/projects';
import loadTodayPage from './pages/today';

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
    loadTodayPage();
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
    loadProjectPage();
  });

  notesPage.addEventListener('click', (e) => {
    checkForActiveAttribute(linkArray);
    wipeDomContent();
    addActiveAttribute(e);
    loadNotesPage();
  });
}
