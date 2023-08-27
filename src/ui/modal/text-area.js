export default function buildModalTextArea(className, placeholder, element) {
  const textArea = document.createElement('textarea');

  // limit character length on title text areas
  if (className.includes('title')) {
    textArea.maxLength = 30;
  }

  textArea.classList.add(`${className}`);
  textArea.placeholder = `${placeholder}`;
  element.appendChild(textArea);
}
