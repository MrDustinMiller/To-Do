import makeNewTaskDiv from './ui/noTasksMessage';

function setToLocalStorage(type, task, pageHeaderText) {
  const data = localStorage.getItem(`${type}`);

  //if no data
  if (!data) {
    // if no value in variable then we are not adding a task to a project
    if (!pageHeaderText) {
      // populate array with our task object
      const dataArray = [task];
      localStorage.setItem(`${type}`, JSON.stringify(dataArray));
    } else {
      // add project page title property to task
      task.projectPage = pageHeaderText;
      // populate array with our task object and individual project page title
      const dataArray = [task];
      localStorage.setItem(`${type}`, JSON.stringify(dataArray));
    }
  } else {
    task.projectPage = pageHeaderText;

    // populate array with existing tasks of 'type'
    const dataArray = JSON.parse(localStorage.getItem(`${type}`));

    dataArray.push(task);

    // set new array with all tasks old and new to local storage
    localStorage.setItem(`${type}`, JSON.stringify(dataArray));
  }
}

function getFromLocalStorage(type) {
  return JSON.parse(localStorage.getItem(`${type}`));
}

function deleteTaskFromLocalStorage(type, taskTitle) {
  const tasks = getFromLocalStorage(`${type}`);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskTitle === taskTitle) {
      tasks.splice(i, 1);
      setToLocalStorageAfterDeleting(type, tasks);
    }
  }
}

function setToLocalStorageAfterDeleting(type, tasks) {
  localStorage.setItem(`${type}`, JSON.stringify(tasks));

  // if no tasks in either 'toDo' or 'notes' LS arrays delete the key from LS
  if (tasks.length === 0 && type === 'toDo') {
    localStorage.removeItem(`${type}`);
    makeNewTaskDiv('tasks', 'to-do-container');
  } else if (tasks.length === 0 && type === 'notes') {
    localStorage.removeItem(`${type}`);
    makeNewTaskDiv('notes', 'notes-container');
  }

  if (tasks.length === 0 && type === 'project-task') {
    localStorage.removeItem(`${type}`);
  } else if (tasks.length === 0 && type === 'project') {
    localStorage.removeItem(`${type}`);
  }

  return;
}

export { setToLocalStorage, getFromLocalStorage, deleteTaskFromLocalStorage };
