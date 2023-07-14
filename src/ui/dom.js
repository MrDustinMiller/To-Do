import loadTaskList from '../pages/taskListPage';

function createSidebar() {
  const contentContainer = document.querySelector('.content');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-left');
  contentContainer.appendChild(sidebar);
  createTopSidebarContent(sidebar);
}

function createTopSidebarContent(sidebar) {
  const topContainer = document.createElement('div');
  topContainer.classList.add('sidebar-top-container');
  sidebar.appendChild(topContainer);

  const sidebarLinks = document.createElement('ul');
  sidebarLinks.classList.add('sidebar-links');
  topContainer.appendChild(sidebarLinks);

  const todayLinkItem = document.createElement('li');
  todayLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(todayLinkItem);
  const todayLink = document.createElement('i');
  todayLink.setAttribute('class', 'fa-solid fa-sun');
  todayLinkItem.appendChild(todayLink);
  const todayLinkText = document.createElement('p');
  todayLinkText.classList.add('today');
  todayLinkText.textContent = 'Today';
  todayLinkItem.appendChild(todayLinkText);

  const taskListLinkItem = document.createElement('li');
  taskListLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(taskListLinkItem);
  const taskListLink = document.createElement('i');
  taskListLink.setAttribute('class', 'fa-solid fa-check');
  taskListLinkItem.appendChild(taskListLink);
  const taskListLinkText = document.createElement('p');
  taskListLinkText.classList.add('task-list');
  // not sure about line below
  taskListLinkItem.classList.add('active');
  taskListLinkText.textContent = 'Task List';
  taskListLinkItem.appendChild(taskListLinkText);

  createBottomSidebarContent(sidebar);
}

function createBottomSidebarContent(sidebar) {
  const bottomContainer = document.createElement('div');
  bottomContainer.classList.add('sidebar-bottom-container');
  sidebar.appendChild(bottomContainer);

  const sidebarLinks = document.createElement('ul');
  sidebarLinks.classList.add('sidebar-links');
  bottomContainer.appendChild(sidebarLinks);

  const projectLinkItem = document.createElement('li');
  projectLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(projectLinkItem);
  const projectLink = document.createElement('i');
  projectLink.setAttribute('class', 'fa-solid fa-file');
  projectLinkItem.appendChild(projectLink);
  const projectLinkText = document.createElement('p');
  projectLinkText.classList.add('projects');
  projectLinkText.textContent = 'Projects';
  projectLinkItem.appendChild(projectLinkText);

  const notesLinkItem = document.createElement('li');
  notesLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(notesLinkItem);
  const notesLink = document.createElement('i');
  notesLink.setAttribute('class', 'fa-solid fa-book');
  notesLinkItem.appendChild(notesLink);
  const notesLinkText = document.createElement('p');
  notesLinkText.classList.add('notes');
  notesLinkText.textContent = 'Notes';
  notesLinkItem.appendChild(notesLinkText);

  createSidebarFooter(sidebar);
}

function createSidebarFooter(sidebar) {
  const sidebarFooter = document.createElement('div');
  sidebarFooter.classList.add('sidebar-footer');
  sidebar.appendChild(sidebarFooter);

  const newDiv = document.createElement('div');
  newDiv.classList.add('new-button-div');
  sidebarFooter.appendChild(newDiv);
  const newContentBtn = document.createElement('i');
  newContentBtn.setAttribute('title', 'New');
  newContentBtn.setAttribute('class', 'sidebar-new fa-solid fa-plus');
  newDiv.appendChild(newContentBtn);

  // const newTextNode = document.createElement('p');
  // newTextNode.textContent = 'New';
  // newDiv.appendChild(newTextNode);

  const settingsDiv = document.createElement('div');
  settingsDiv.classList.add('settings-div');
  sidebarFooter.appendChild(settingsDiv);
  const settingsBtn = document.createElement('i');
  settingsBtn.setAttribute('title', 'Settings');
  settingsBtn.setAttribute('class', 'sidebar-settings fa-solid fa-gear');
  settingsDiv.appendChild(settingsBtn);
}

function createMainContent() {
  const body = document.querySelector('body');
  const rightMainContent = document.createElement('div');
  rightMainContent.classList.add('main-right');
  body.appendChild(rightMainContent);
  // open page to home 'task-list'
  loadTaskList();
}

export function makeNewTaskDiv() {
  const mainRightBody = document.querySelector('.main-right');

  const noTaskDiv = document.createElement('div');
  noTaskDiv.classList.add('no-task-container');
  mainRightBody.appendChild(noTaskDiv);

  const noTaskText = document.createElement('p');
  noTaskText.textContent = 'You have no tasks yet, lets make some!';
  noTaskDiv.appendChild(noTaskText);

  const newTaskButton = document.createElement('i');
  newTaskButton.setAttribute('class', 'main-new fa-regular fa-plus fa-2xl');
  newTaskButton.setAttribute('title', 'New');
  noTaskDiv.appendChild(newTaskButton);
}

export function wipeDomContent() {
  const content = document.querySelector('.main-right');
  if (content.hasChildNodes()) {
    // if mainContent has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

export default function loadDom() {
  createSidebar();
  createMainContent();
}
