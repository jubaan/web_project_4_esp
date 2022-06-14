const closeButtons = Array.from(
  document.querySelectorAll('.modal-form__close-button')
);

closeButtons.map((closeButton) => {
  closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
  });
});

const closeButton = document.querySelector('.modal-preview__close-button')

closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
  });
