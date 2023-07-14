import { makeNewTaskDiv } from '../ui/dom';

export default function loadTaskList() {
  //if no tasks in localstorage show
  makeNewTaskDiv();
  // else
  // show tasks in local storage
  // probably make LS its own module and import it here to use
}
