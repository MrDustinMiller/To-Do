import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';

export default function loadTodayPage() {
  createHeader();
  //load all projects/tasks from Local storage on click
  //else
  makeNewTaskDiv('items saved', 'task-container');
  dialogEvents();
}
