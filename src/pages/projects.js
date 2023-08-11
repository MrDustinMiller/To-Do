import createHeader from '../ui/header';
// import makeNewTaskDiv from '../ui/noTasksMessage';
// import { dialogEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addNewProjectToSidebar from '../ui/addNewProjectToSidebar';

// export default function loadProjectPage() {
//   // createHeader();
//   // // if false we have no existing projects so make a task container so user can add new projects
//   // const projects = localStorage.getItem('project');
//   // if (!projects) {
//   //   makeNewTaskDiv('projects');
//   //   dialogEvents();
//   // }
// }

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
