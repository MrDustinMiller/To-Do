export default function createHeader() {
  const sidebarLinkClicked = document.querySelector('.active').innerHTML;
  const mainBody = document.querySelector('.main-right');

  const mainHeader = document.createElement('div');
  mainHeader.classList.add('main-header');
  mainBody.appendChild(mainHeader);

  const pageHeader = document.createElement('div');
  pageHeader.classList.add('page-header');
  pageHeader.innerHTML = `${sidebarLinkClicked}`;
  mainBody.appendChild(pageHeader);
}
