import { setToLocalStorage } from '../localStorage';
import addTaskToPage from '../ui/addTaskToPage';

export default function addToDo(type, task) {
  setToLocalStorage(type, task);

  // we dont want projects being added like tasks/notes will be
  if (type !== 'project') {
    addTaskToPage(type, task);
  }
}
