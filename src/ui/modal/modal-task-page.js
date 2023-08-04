import { wipeModalContent } from '../dom';
import buildModalDueDateDiv from './due-date';
import buildModalTextArea from './text-area';

export default function loadModalTaskPage() {
  // if it exists then dont build the page because its open already, just return
  if (document.querySelector('.modal-task-title-area')) return;

  const newContentDiv = document.querySelector('.modal-new-content-div');
  wipeModalContent(newContentDiv);
  buildModalTextArea(
    'modal-task-title-area',
    'Title: Pay Bills',
    newContentDiv
  );
  buildModalTextArea(
    'modal-task-title-area',
    'Details: phone bill',
    newContentDiv
  );
  buildModalDueDateDiv(newContentDiv);
  buildModalTaskpriorityDiv(newContentDiv);
}

function buildModalTaskpriorityDiv(newContentDiv) {
  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('modal-priority-div');
  priorityDiv.textContent = 'Priority: ';
  newContentDiv.appendChild(priorityDiv);

  const prioritybuttonDiv = document.createElement('div');
  prioritybuttonDiv.classList.add('priority-btn-div');
  priorityDiv.appendChild(prioritybuttonDiv);

  const priorityLowBtn = document.createElement('button');
  priorityLowBtn.classList.add('priority-low-btn');
  priorityLowBtn.classList.add('modal-btn');
  priorityLowBtn.textContent = 'LOW';
  prioritybuttonDiv.appendChild(priorityLowBtn);

  const priorityMedBtn = document.createElement('button');
  priorityMedBtn.classList.add('priority-med-btn');
  priorityMedBtn.classList.add('modal-btn');
  priorityMedBtn.textContent = 'MEDIUM';
  prioritybuttonDiv.appendChild(priorityMedBtn);

  const priorityHighBtn = document.createElement('button');
  priorityHighBtn.classList.add('priority-high-btn');
  priorityHighBtn.classList.add('modal-btn');
  priorityHighBtn.textContent = 'HIGH';
  prioritybuttonDiv.appendChild(priorityHighBtn);

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('modal-add-task-btn');
  addTaskButton.classList.add('modal-btn');
  addTaskButton.textContent = 'Add to do';
  priorityDiv.appendChild(addTaskButton);
}
