import { captureModalProjectPageData } from '../../tasks/captureTaskData';
import addToDo from '../../tasks/addTasks';
import addNewProjectToSidebar from '../addNewProjectToSidebar';
import removeModal from './removeModal';

export default function modalTaskProjectEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');

  modalAddButton.addEventListener('click', () => {
    // capture todo object in task variable
    const task = captureModalProjectPageData();
    addToDo('project', task);

    // destructure and rename to project title so we can add to sidebar through function call
    const { taskTitle: projectTitle } = task;
    addNewProjectToSidebar(projectTitle);

    removeModal();
  });
}
