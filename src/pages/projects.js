import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';

export default function loadProjectPage() {
  createHeader();
  //load projects from Local storage
  //else
  makeNewTaskDiv('projects');
  dialogEvents();
}
