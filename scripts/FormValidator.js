export default class FormValidator {
  constructor(formSelectors) {
    this._form = formSelectors.form;
    this._input = formSelectors.input;
    this._submit = formSelectors.submit;
  }

  _getElement() {
    this._element = document.querySelector(this._form);

    return this._element;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleSubmitButton(inputList) {
    const buttonElement = this._element.querySelector(this._submit);

    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add('button_inactive');
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove('button_inactive');
      buttonElement.disabled = false;
    }
  }

  _setEventLlisteners() {
    const inputList = Array.from(this._element.querySelectorAll(this._input));
    const buttonElement = this._element.querySelector(this._submit);

    this._element.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this._toggleSubmitButton(inputList);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleSubmitButton(inputList, buttonElement);
      });
    });
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._element.querySelector(
      `.${inputElement.id}-input-error`
    );

    inputElement.classList.add('form__input_type_error');
    errorElement.classList.add('form__input-error_active');
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._element.querySelector(
      `.${inputElement.id}-input-error`
    );

    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  }

  enableValidation() {
    this._element = this._getElement();

    this._setEventLlisteners();
  }
}
