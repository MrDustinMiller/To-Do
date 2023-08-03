export default function buildModalTextArea(className, placeholder, element) {
  const textArea = document.createElement('textarea');
  textArea.classList.add(`${className}`);
  textArea.placeholder = `${placeholder}`;
  element.appendChild(textArea);
}
