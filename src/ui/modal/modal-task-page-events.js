import { captureModalTaskPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';
import { checkForNoTaskMessage } from '../dom';

export default function modalTaskPageEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const pageHeader = document.querySelector('.page-header');
  const pageHeaderText = document.querySelector('.header-content').textContent;

  modalAddButton.addEventListener('click', () => {
    // check if task should be attached to a project or not
    if (pageHeader.nextSibling.className === 'project-container') {
      // capture todo object in task variable
      const task = captureModalTaskPageData();
      removeModal();
      checkForNoTaskMessage();
      addToDo('project-task', task, pageHeaderText);
    } else {
      const task = captureModalTaskPageData();
      checkForNoTaskMessage();
      addToDo('toDo', task);
      removeModal();
    }
  });

  priorityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // func to check if any buttons have a color of white
      // if so change it to normal so next btn clicked will be the selected one taken as input
      const btnBgColor = getComputedStyle(button);
      button.style.backgroundColor = `${btnBgColor.backgroundColor}`;
      button.style.color = 'White';
    });
  });
}
