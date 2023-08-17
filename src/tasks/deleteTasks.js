import { removeTaskFromDom } from '../ui/dom';

export default function deleteTask(element) {
  element.addEventListener('click', (e) => {
    const test = e.target.parentElement;
    const task = test.parentNode;
    // gets us the task title from task clicked
    const taskTitle = task.classList[0];
    removeTaskFromDom(task, taskTitle);
  });
}
