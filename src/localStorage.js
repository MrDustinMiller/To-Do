function setToLocalStorage(type, task) {
  const data = localStorage.getItem(`${type}`);

  //if no data
  if (!data) {
    // populate array with our task object
    const dataArray = [task];
    localStorage.setItem(`${type}`, JSON.stringify(dataArray));
  } else {
    // populate array with existing tasks of 'type'
    const dataArray = JSON.parse(localStorage.getItem(`${type}`));

    // push our new task onto end of array
    dataArray.push(task);

    // set new array will all tasks old and new to local storage
    localStorage.setItem(`${type}`, JSON.stringify(dataArray));
  }
}

function getFromLocalStorage(type) {
  return JSON.parse(localStorage.getItem(`${type}`));
}

export { setToLocalStorage, getFromLocalStorage };
