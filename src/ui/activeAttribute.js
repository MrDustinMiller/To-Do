function addActiveAttribute(e) {
  e.target.parentElement.classList.add('active');
}

function checkForActiveAttribute(linkArray) {
  linkArray.forEach((element) => {
    if (element.parentElement.classList.contains('active')) {
      element.parentElement.classList.remove('active');
    }
  });
}

export { addActiveAttribute, checkForActiveAttribute };
