import { captureModalTaskPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';
import { wipeModalContent } from '../dom';

export default function modalTaskPageEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const main = document.querySelector('.main-right');
  const noTaskContainer =
    document.querySelector('.task-container') ||
    document.querySelector('to-do-container');
  const pageHeader = document.querySelector('.page-header');
  const projectContainer = document.querySelector('.project-container');

  modalAddButton.addEventListener('click', () => {
    // check if task should be attached to a project or not
    if (pageHeader.nextSibling.className === 'project-container') {
      // capture todo object in task variable
      const task = captureModalTaskPageData();
      removeModal();
      wipeModalContent(projectContainer);
      addToDo('project-task', task, pageHeader.textContent);
    } else {
      // capture todo object in task variable
      const task = captureModalTaskPageData();
      addToDo('toDo', task);
      removeModal();
      main.removeChild(noTaskContainer);
    }
  });

  priorityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const btnBgColor = getComputedStyle(button);
      button.style.backgroundColor = `${btnBgColor.backgroundColor}`;
      button.style.color = 'White';
    });
  });
}
