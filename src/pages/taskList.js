import makeNewTaskDiv from '../ui/noTasksMessage';
import createHeader from '../ui/header';
import { dialogEvents } from '../events';

export default function loadTaskList() {
  createHeader();
  //if no tasks in localstorage show
  makeNewTaskDiv('tasks');
  dialogEvents();
  // else
  // show tasks in local storage
}
