export default function makeNewTaskDiv(choice) {
  const mainRightBody = document.querySelector('.main-right');
  const noTaskDiv = document.createElement('div');
  noTaskDiv.classList.add('task-container');
  mainRightBody.appendChild(noTaskDiv);

  createNoTaskContainerText(noTaskDiv, choice);
  createNoTaskContainerButton(noTaskDiv);
}

function createNoTaskContainerText(noTaskDiv, choice) {
  const noTaskText = document.createElement('p');
  noTaskText.textContent = `You have no ${choice} yet, lets make some!`;
  noTaskDiv.appendChild(noTaskText);
}

function createNoTaskContainerButton(noTaskDiv) {
  const newTaskButton = document.createElement('i');
  newTaskButton.setAttribute(
    'class',
    'new-content main-new fa-regular fa-plus fa-2xl'
  );
  newTaskButton.setAttribute('title', 'New');
  noTaskDiv.appendChild(newTaskButton);
}
