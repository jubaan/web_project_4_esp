const closeButtons = Array.from(
  document.querySelectorAll('.container__close')
);

closeButtons.map((closeButton) => {
  closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
  });
});