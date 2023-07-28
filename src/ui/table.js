// function insertTaskTable() {
//   const container = document.querySelector('.task-container');

//   const table = document.createElement('table');
//   table.classList.add('task-table');

//   const tableHeadingRow = document.createElement('tr');
//   tableHeadingRow.classList.add('table-headings');
//   table.appendChild(tableHeadingRow);

//   const taskTableHeader = document.createElement('th');
//   taskTableHeader.textContent = 'Task Name';
//   tableHeadingRow.appendChild(taskTableHeader);

//   const statusHeader = document.createElement('th');
//   statusHeader.textContent = 'Status';
//   tableHeadingRow.appendChild(statusHeader);

//   const dueDateHeader = document.createElement('th');
//   dueDateHeader.textContent = 'Due Date';
//   tableHeadingRow.appendChild(dueDateHeader);

//   const newContentBtn = document.createElement('i');
//   newContentBtn.setAttribute('title', 'New');
//   newContentBtn.setAttribute('class', 'task-page-new fa-solid fa-plus');
//   // newContentBtn.textContent = 'New';
//   container.appendChild(newContentBtn);

//   container.appendChild(table);
//   addRowToTaskTable();
// }

// function addRowToTaskTable() {
//   const table = document.querySelector('.task-table');

//   const newRow = document.createElement('tr');
//   table.appendChild(newRow);

//   const newTableData = document.createElement('td');
//   newRow.appendChild(newTableData);
// }
