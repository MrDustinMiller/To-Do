export default function addNewProjectToSidebar(projectTitle) {
  const projectSidebarLink = document.querySelector('.sidebar-project-link');

  const newProjectLink = document.createElement('button');
  newProjectLink.setAttribute('class', `project-child ${projectTitle}`);
  newProjectLink.textContent = `${projectTitle}`;
  // insert new user project button AFTER sidebar project link
  projectSidebarLink.insertAdjacentElement('afterend', newProjectLink);
}
