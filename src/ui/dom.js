import { deleteTaskFromLocalStorage } from '../localStorage';
import deleteProjectFromSidebar from '../deleteProjectFromSidebar';
import { addTaskContainer } from './addTaskToPage';

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

// refactor below
function removeTaskFromDom(task, taskTitle) {
  const toDoContainer =
    document.querySelector('.to-do-container') ||
    document.querySelector('.project-container') ||
    document.querySelector('.notes-container');

  if (toDoContainer.className === 'project-container') {
    deleteTaskFromLocalStorage('project-task', taskTitle);
  } else if (toDoContainer.className === 'to-do-container') {
    deleteTaskFromLocalStorage('toDo', taskTitle);
  } else {
    deleteTaskFromLocalStorage('notes', taskTitle);
  }

  toDoContainer.removeChild(task);

  // if project page has no children then we'll grab the page header and delete
  // it from the sidebar
  if (toDoContainer.children.length === 0) {
    const currentPage = document.querySelector('.header-content').textContent;
    deleteProjectFromSidebar(currentPage);
    wipeDomContent();
    addTaskContainer('to-do-container');
  }
}

function checkForNoTaskMessage() {
  const noTaskText = document.querySelector('.no-task-text');
  const newContentBtn = document.querySelector('.main-new');
  const container =
    document.querySelector('.to-do-container') ||
    document.querySelector('.notes-container') ||
    document.querySelector('.project-container');

  if (container.contains(noTaskText)) {
    container.removeChild(noTaskText);
    container.removeChild(newContentBtn);
  }
}

export {
  wipeDomContent,
  wipeModalContent,
  removeTaskFromDom,
  checkForNoTaskMessage,
};
