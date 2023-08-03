import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';

export default function loadTodayPage() {
  createHeader();
  //load tasks from Local storage
  //else
  makeNewTaskDiv('items saved');
  dialogEvents();
}
