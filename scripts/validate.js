const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );

  inputElement.classList.add('form__input_type_error');
  errorElement.classList.add('form__input-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );

  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('button_inactive');
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputList));
  const buttonElement = formElement.querySelector('selectors.submitButton');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (selectors) => {
  const formList = document.querySelectorAll(selectors.formList);

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    setEventListeners(formElement, selectors);
  });
};

enableValidation({
  formList: '.form',
  inputList: '.form__input',
  submitButton: '.form__submit',
});


