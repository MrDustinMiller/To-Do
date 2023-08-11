export default function removeModal() {
  const newModal = document.querySelector('.new-modal');
  const container =
    document.querySelector('.task-container') ||
    document.querySelector('.to-do-container') ||
    document.querySelector('.notes-container');

  container.removeChild(newModal);
}
