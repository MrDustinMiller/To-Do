import createHeader from '../ui/header';
import makeNewTaskDiv from '../ui/noTasksMessage';
import { dialogEvents } from '../events';

export default function loadNotesPage() {
  createHeader();
  //load notes from Local storage
  //else
  makeNewTaskDiv('notes');
  dialogEvents();
}
