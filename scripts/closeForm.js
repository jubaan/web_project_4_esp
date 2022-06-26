const closeButtons = Array.from(document.querySelectorAll('.container__close'));

closeButtons.map((closeButton) => {
  closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
    if (e.target.classList.contains('form')) {
      e.target.parentElement.reset();
    }
  });
});

const hideInputErr = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );

  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const closeContainers = Array.from(document.querySelectorAll('.container'));

closeContainers.map((closeContainer) => {
  closeContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('container')) {
      closeContainer.classList.add('offscreen');
    }

    if (e.target.classList.contains('form')) {
      const form = closeContainer.querySelector('.form');
      const inputs = Array.from(form.querySelectorAll('.form__input'));

      inputs.map((input) => {
        hideInputErr(form, input);
      });
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeContainer.classList.add('offscreen');
    }
  });
});
