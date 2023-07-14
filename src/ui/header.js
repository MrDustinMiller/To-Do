export default function createHeader() {
  const mainBody = document.querySelector('.main-right');

  const mainHeader = document.createElement('div');
  mainHeader.classList.add('main-header');
  mainBody.appendChild(mainHeader);
}
