import { makeNewTaskDiv } from '../ui/noTasksMessage';
import createHeader from '../ui/header';

export default function loadTaskList() {
  createHeader();
  //if no tasks in localstorage show
  makeNewTaskDiv();
  // else
  // show tasks in local storage
  // probably make LS its own module and import it here to use
}
