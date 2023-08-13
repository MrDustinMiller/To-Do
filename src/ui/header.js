export default function createHeader() {
  // using innerHTML so we can grab the icon as well as text
  const sidebarLinkClicked = document.querySelector('.active').innerHTML;
  const mainBody = document.querySelector('.main-right');

  const pageHeader = document.createElement('div');
  pageHeader.classList.add('page-header');
  pageHeader.innerHTML = `${sidebarLinkClicked}`;
  mainBody.appendChild(pageHeader);
}
