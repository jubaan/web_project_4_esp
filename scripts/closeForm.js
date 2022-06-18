const closeButtons = Array.from(document.querySelectorAll('.container__close'));

closeButtons.map((closeButton) => {
  closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
    e.target.parentElement.reset();
  });
});

const closeContainers = Array.from(document.querySelectorAll('.container'));

closeContainers.map((closeContainer) => {
  closeContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('container')) {
      closeContainer.classList.add('offscreen');
    }
  });
});