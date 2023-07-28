import {
  addActiveAttribute,
  checkForActiveAttribute,
} from '../activeAttribute';

export default function modalEvents() {
  const modalSidebarLinks = document.querySelectorAll('.modal-link');

  modalSidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      checkForActiveAttribute(modalSidebarLinks);
      addActiveAttribute(e);
      checkWichModalSidebarLinkIsClicked(e.target.textContent);
    });
  });
}

function checkWichModalSidebarLinkIsClicked(link) {
  // will need to load each modal page here by importing
  switch (link) {
    case 'Task':
      break;
    case 'Project':
      break;
    case 'Note':
      break;

    default:
      break;
  }
}
