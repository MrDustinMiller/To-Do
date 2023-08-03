import { wipeModalContent } from '../dom';
import buildModalDueDateDiv from './due-date';
import buildModalTextArea from './text-area';

export default function loadModalProjectPage() {
  const modalMainContent = document.querySelector('.modal-new-content-div');

  wipeModalContent(modalMainContent);
  buildModalTextArea(
    'modal-project-text-area',
    'Title: Build new fence.',
    modalMainContent
  );
  buildModalDueDateDiv(modalMainContent);

  const addNewProjectBtnOnProjectModalPage = document.createElement('button');
  addNewProjectBtnOnProjectModalPage.classList.add('modal-add-project-btn');
  addNewProjectBtnOnProjectModalPage.classList.add('modal-btn');
  addNewProjectBtnOnProjectModalPage.textContent = 'Add Project';
  modalMainContent.appendChild(addNewProjectBtnOnProjectModalPage);
}
