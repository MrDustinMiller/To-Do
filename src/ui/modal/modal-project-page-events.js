import { captureModalProjectPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import addNewProjectToSidebar, {
  checkIfProjectNameAlreadyExists,
} from '../addNewProjectToSidebar';
import removeModal from './removeModal';
import addPageEventListeners from '../../events';
import { checkForNoTaskMessage } from '../dom';

export default function modalTaskProjectEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');

  modalAddButton.addEventListener('click', () => {
    // capture todo object in task variable
    const task = captureModalProjectPageData();
    checkForNoTaskMessage();

    // destructure and rename to project title so we can add to sidebar through function call
    const { taskTitle: projectTitle } = task;
    if (projectTitle === 'N/A') {
      return;
    }

    const check = checkIfProjectNameAlreadyExists(projectTitle);
    // if we have a duplicate project name return, else add project to sidebar
    if (check === true) {
      return;
    } else {
      addToDo('project', task);
      addNewProjectToSidebar(projectTitle);
      addPageEventListeners();
      removeModal();
    }
  });
}
