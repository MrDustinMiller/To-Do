import createHeader from '../ui/header';
import makeNewTaskDivForProjects from '../ui/noTasksMessage';
import { dialogEvents, projectTrashCanEvents } from '../events';
import { getFromLocalStorage } from '../localStorage';
import addNewProjectToSidebar from '../ui/addNewProjectToSidebar';
import { buildToDoUi } from '../ui/addTaskToPage';
import { addTaskContainer } from '../ui/addTaskToPage';

//runs when a individual project is clicked
export default function loadProjectPage(e) {
  createHeader('project');
  projectTrashCanEvents();
  const projectTasks = getFromLocalStorage('project-task');

  if (!projectTasks) {
    makeNewTaskDivForProjects('tasks', 'to-do-container');
    dialogEvents();
  } else {
    // refactor to seperate function
    const individiualProjectTask = projectTasks.filter(
      (task) => task.projectPage === e.target.textContent
    );

    // if no task in project (just made) show no task message
    if (individiualProjectTask.length === 0) {
      makeNewTaskDivForProjects('tasks', 'project-container');
      dialogEvents();
    } else {
      // build task on project page clicked
      addTaskContainer('project-container');
      individiualProjectTask.forEach((task) => {
        buildToDoUi(task);
      });
    }
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
