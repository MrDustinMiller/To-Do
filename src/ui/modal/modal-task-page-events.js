import { captureModalTaskPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';
import { checkForNoTaskMessage } from '../dom';

export default function modalTaskPageEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const pageHeader = document.querySelector('.page-header');

  modalAddButton.addEventListener('click', () => {
    // check if task should be attached to a project or not
    if (pageHeader.nextSibling.className === 'project-container') {
      // capture todo object in task variable
      const task = captureModalTaskPageData();
      removeModal();
      addToDo('project-task', task, pageHeader.textContent);
    } else {
      const task = captureModalTaskPageData();
      checkForNoTaskMessage();
      addToDo('toDo', task);
      removeModal();
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
