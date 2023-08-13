import createHeader from '../ui/header';
import makeNewTaskDivForProjects from '../ui/noTasksMessage';
import { dialogEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addNewProjectToSidebar from '../ui/addNewProjectToSidebar';

//runs when a individual project is clicked
export default function loadProjectPage() {
  createHeader();
  makeNewTaskDivForProjects('tasks', 'project-container');
  dialogEvents();
}

// function is ran on page load
export function addExistingProjectsToSidebar() {
  // we also want to check if there is any projects on page load in LS to show
  // under projects tab on page load aswell.
  const projects = getFromLocalStorage('project');

  if (!projects) return;

  projects.forEach((project) => {
    addNewProjectToSidebar(project.taskTitle);
  });
}
