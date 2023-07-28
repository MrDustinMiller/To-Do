import modalEvents from './modal-events';

export default function createNewDialogModal() {
  // break this into smaller functions
  const container = document.querySelector('.task-container');
  const newModal = document.createElement('dialog');
  newModal.classList.add('new-modal');
  container.appendChild(newModal);

  const header = document.createElement('header');
  header.classList.add('modal-header');
  header.textContent = 'Create a new...';
  newModal.appendChild(header);

  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'fa-solid fa-x');
  header.appendChild(closeBtn);

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('modal-main-div');
  newModal.appendChild(mainDiv);

  const sidebar = document.createElement('div');
  sidebar.classList.add('modal-sidebar');

  const sidebarLinkTasks = document.createElement('p');
  sidebarLinkTasks.classList.add('modal-link');
  // add active to show task page first in modal
  sidebarLinkTasks.classList.add('active');
  sidebarLinkTasks.textContent = 'Task';
  sidebar.appendChild(sidebarLinkTasks);

  const sidebarLinkProjects = document.createElement('p');
  sidebarLinkProjects.classList.add('modal-link');
  sidebarLinkProjects.textContent = 'Project';
  sidebar.appendChild(sidebarLinkProjects);

  const sidebarLinkNotes = document.createElement('p');
  sidebarLinkNotes.classList.add('modal-link');
  sidebarLinkNotes.textContent = 'Note';
  sidebar.appendChild(sidebarLinkNotes);
  mainDiv.appendChild(sidebar);

  const newContentDiv = document.createElement('div');
  newContentDiv.classList.add('modal-new-content-div');
  mainDiv.appendChild(newContentDiv);

  const newEntryDiv = document.createElement('div');
  newEntryDiv.classList.add('modal-new-entry');
  newContentDiv.appendChild(newEntryDiv);

  // here will be seperated into own modules for each link
  //
  const titleTextArea = document.createElement('textarea');
  titleTextArea.classList.add('modal-task-title-area');
  titleTextArea.textContent = 'Title: Pay Bills';
  newEntryDiv.appendChild(titleTextArea);

  const taskDescriptionTextArea = document.createElement('textarea');
  taskDescriptionTextArea.classList.add('modal-task-title-area');
  taskDescriptionTextArea.textContent = 'Details: phone bill';
  newEntryDiv.appendChild(taskDescriptionTextArea);

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('modal-date-div');
  dateDiv.textContent = 'date inpute here';
  newContentDiv.appendChild(dateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('modal-priority-div');
  priorityDiv.textContent = 'priority and add task button here';
  newContentDiv.appendChild(priorityDiv);
  //

  newModal.showModal();
  modalEvents();
}
