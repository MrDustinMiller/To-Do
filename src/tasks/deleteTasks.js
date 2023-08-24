import { removeTaskFromDom } from '../ui/dom';

export default function deleteTask(type, element) {
  element.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const task = parent.parentNode;

    if (type === 'toDo') {
      // gets us the task title from task clicked
      const taskTitle = task.classList[0];
      removeTaskFromDom(task, taskTitle);
    } else {
      // gets us the note title from task clicked
      const noteTitle = task.childNodes[0].textContent;
      removeTaskFromDom(task, noteTitle);
    }
  });
}
