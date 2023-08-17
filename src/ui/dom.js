import { deleteTaskFromLocalStorage } from '../localStorage';
import deleteProjectFromSidebar from '../deleteProjectFromSidebar';

function wipeDomContent() {
  const content = document.querySelector('.main-right');

  if (content.hasChildNodes()) {
    // if mainContent has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

function wipeModalContent(content) {
  if (content.hasChildNodes()) {
    // if modal main has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

function removeTaskFromDom(task, taskTitle) {
  const toDoContainer =
    document.querySelector('.to-do-container') ||
    document.querySelector('.project-container');

  if (toDoContainer.className === 'project-container') {
    deleteTaskFromLocalStorage('project-task', taskTitle);
  } else {
    deleteTaskFromLocalStorage('toDo', taskTitle);
  }

  toDoContainer.removeChild(task);

  // if project page has no children then we'll grab the page header and delete
  // it from the sidebar
  if (toDoContainer.children.length === 0) {
    const currentPage = document.querySelector('.page-header').textContent;
    deleteProjectFromSidebar(currentPage);
  }
}

export { wipeDomContent, wipeModalContent, removeTaskFromDom };
