import { captureModalTaskPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import removeModal from './removeModal';
import { checkForNoTaskMessage } from '../dom';
import {
  addActiveAttribute,
  checkForActiveAttribute,
} from '../activeAttribute';

export default function modalTaskPageEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const pageHeader = document.querySelector('.page-header');
  const pageHeaderText = document.querySelector('.header-content');

  modalAddButton.addEventListener('click', () => {
    if (pageHeader === null) {
      pageHeader = ' ';
      pageHeaderText = ' ';
    }

    // check if task should be attached to a project or not
    if (pageHeader.nextSibling.className === 'project-container') {
      // capture todo object in task variable
      const task = captureModalTaskPageData();
      removeModal();
      checkForNoTaskMessage();
      addToDo('project-task', task, pageHeaderText.textContent);
    } else {
      const task = captureModalTaskPageData();
      checkForNoTaskMessage();
      addToDo('toDo', task);
      removeModal();
    }
  });

  priorityButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // add active to classlist of cliked button so we can style it with css
      checkForActiveAttribute(priorityButtons);
      addActiveAttribute(e);
    });
  });
}
