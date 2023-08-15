import createHeader from '../ui/header';
import makeNewTaskDivForProjects from '../ui/noTasksMessage';
import { dialogEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addNewProjectToSidebar from '../ui/addNewProjectToSidebar';
import { buildToDoUi } from '../ui/addTaskToPage';
import { wipeDomContent } from '../ui/dom';
import { addTaskContainer } from '../ui/addTaskToPage';

//runs when a individual project is clicked
export default function loadProjectPage(e) {
  createHeader();
  const allProjectTasks = getFromLocalStorage('project-task');

  if (!allProjectTasks) {
    makeNewTaskDivForProjects('tasks', 'project-container');
    dialogEvents();
  } else {
    addTaskContainer('project-container');
    const individiualProjectTask = allProjectTasks.filter(
      (task) => task.projectPage === e.target.textContent
    );
    individiualProjectTask.forEach((task) => {
      buildToDoUi(task);
    });
  }
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
