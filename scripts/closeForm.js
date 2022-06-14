const closeButtons = Array.from(document.querySelectorAll('.modal-form__close-button'));

closeButtons.map(closeButton => {
  closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
  });
});
