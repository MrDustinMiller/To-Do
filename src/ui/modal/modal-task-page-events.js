import { captureModalTaskPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';

export default function modalTaskPageEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const main = document.querySelector('.main-right');
  const noTaskContainer = document.querySelector('.task-container');

  modalAddButton.addEventListener('click', () => {
    // capture todo object in task variable
    const task = captureModalTaskPageData();
    addToDo('toDo', task);
    removeModal();
    main.removeChild(noTaskContainer);
  });

  priorityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // below works but will move to somewhere else in future
      const btnBgColor = getComputedStyle(button);
      button.style.backgroundColor = `${btnBgColor.backgroundColor}`;
      button.style.color = 'White';
    });
  });
}
