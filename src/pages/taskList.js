import makeNewTaskDiv from '../ui/noTasksMessage';
import createHeader from '../ui/header';
import { dialogEvents } from '../events';

export default function loadTaskList() {
  createHeader();
  //if no tasks in localstorage show
  makeNewTaskDiv();
  dialogEvents();
  // else
  // show tasks in local storage
  // probably make LS its own module and import it here to use
}
