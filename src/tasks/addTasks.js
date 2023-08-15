import { setToLocalStorage } from '../localStorage';
import addTaskToPage from '../ui/addTaskToPage';

export default function addToDo(type, task, pageHeaderText) {
  // we dont want projects being added like tasks/notes will be
  // refactor later
  if (type === 'notes' || type === 'toDo') {
    setToLocalStorage(type, task);
    addTaskToPage(type, task);
  }

  if (type === 'project') {
    setToLocalStorage(type, task);
  }

  if (type === 'project-task') {
    setToLocalStorage(type, task, pageHeaderText);
    addTaskToPage(type, task, 'project-container');
  }
}
