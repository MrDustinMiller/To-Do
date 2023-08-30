import { removeTaskFromDom } from '../ui/dom';

export default function deleteTask(type, element) {
  element.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const task = parent.parentNode;
    const noteTitle = task.childNodes[0].textContent;
    removeTaskFromDom(task, noteTitle);
  });
}
