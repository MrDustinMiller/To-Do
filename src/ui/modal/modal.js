import modalEvents from './modal-events';
import loadModalTaskPage from './modal-task-page';

export default function createNewDialogModal() {
  if (document.querySelector('.new-modal')) return;
  const container =
    document.querySelector('.to-do-container') ||
    document.querySelector('.notes-container') ||
    document.querySelector('.project-container');
  const newModal = document.createElement('dialog');
  newModal.classList.add('new-modal');
  container.appendChild(newModal);

  createModalHeader(newModal);
  createModalMainDiv(newModal);
  createModalSidebar();
  createModalContentDiv();

  newModal.showModal();

  // we want task page to be the first to automatically show in modal
  loadModalTaskPage();

  // load modal events so user can change tabs/etc
  modalEvents(newModal, container);
}

function createModalHeader(newModal) {
  const header = document.createElement('header');
  header.classList.add('modal-header');
  header.textContent = 'Create a new...';
  newModal.appendChild(header);

  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'fa-solid fa-x');
  closeBtn.setAttribute('title', 'Close');
  closeBtn.classList.add('modal-close-btn');
  header.appendChild(closeBtn);
}

function createModalMainDiv(newModal) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('modal-main-div');
  newModal.appendChild(mainDiv);
}

function createModalSidebar() {
  const mainDiv = document.querySelector('.modal-main-div');
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
}

function createModalContentDiv() {
  const mainDiv = document.querySelector('.modal-main-div');
  const newContentDiv = document.createElement('div');
  newContentDiv.classList.add('modal-new-content-div');
  mainDiv.appendChild(newContentDiv);

  const newEntryDiv = document.createElement('div');
  newEntryDiv.classList.add('modal-new-entry');
  newContentDiv.appendChild(newEntryDiv);
}
