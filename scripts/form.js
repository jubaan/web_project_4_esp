const editProfileButton = document.querySelector('.profile__button_edit');

editProfileButton.addEventListener('click', function () {
  const editProfileModalForm = document.querySelector(
    '.modal-form__container.edit-profile'
  );

  editProfileModalForm.classList.remove('offscreen');
});

const addNewCardButton = document.querySelector('.profile__button_add');

addNewCardButton.addEventListener('click', function () {
  const addNewCardModalForm = document.querySelector(
    '.modal-form__container.add-newcard'
  );

  addNewCardModalForm.classList.remove('offscreen');
});

const openPreview = function () {
  const previewImageButtons = Array.from(
    document.querySelectorAll('.element__place-image')
  );

  previewImageButtons.map((previewImageButton) => {
    previewImageButton.addEventListener('click', function (e) {
      const previewImageContainer = document.querySelector(
        '.modal-preview__container'
      );

      preview(e);
      previewImageContainer.classList.remove('offscreen');
    });
  });
};

openPreview();

const closeButtons = Array.from(document.querySelectorAll('.container__close'));

closeButtons.map((closeButton) => {
  closeButton.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('offscreen');
    e.target.parentElement.reset();
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
    const form = closeContainer.querySelector('.form');
    const inputs = Array.from(form.querySelectorAll('.form__input'));

    inputs.map((input) => {
      hideInputErr(form, input);
    });
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeContainer.classList.add('offscreen');
    }
  });
});



const addNewCardForm = document.querySelector(
  '.modal-form__container.add-newcard'
);
let imageTitle = addNewCardForm.querySelector('#imagetitle');
let imageURL = addNewCardForm.querySelector('#imageurl');
let elementsSection = document.querySelector('.elements');

const addNewCardToArray = function (newCard) {
  const previewImageButtons = Array.from(
    document.querySelectorAll('.element__place-image')
  );

  previewImageButtons.push(newCard);
};

addNewCardForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!imageTitle.validity.valid && !imageURL.validity.valid) {
    return;
  }

  if (imageTitle.value === '' || imageURL.value === '') {
    alert('Please enter a title and URL');
    return;
  }

  const newCard = cardElementTemplate.querySelector('.element').cloneNode(true);

  newCard.querySelector('.element__place-name').textContent = imageTitle.value;
  newCard.querySelector('.element__place-image').src = imageURL.value;
  newCard.querySelector('.element__place-image').alt = imageTitle.value;
  newCard.querySelector('.element__form-label').htmlFor = imageTitle.value
    .toLowerCase()
    .split(' ')
    .join('-');
  newCard.querySelector('.form__item_type_checkbox').name = imageTitle.value
    .toLowerCase()
    .split(' ')
    .join('-');
  newCard.querySelector('.form__item_type_checkbox').id = imageTitle.value
    .toLowerCase()
    .split(' ')
    .join('-');
  newCard.querySelector('.form__item_type_checkbox').value = imageTitle.value
    .toLowerCase()
    .split(' ')
    .join('-');

  elements.prepend(newCard);
  addNewCardToArray(newCard);
  newCard.addEventListener('click', openPreview());
  removeElement();

  addNewCardForm.classList.add('offscreen');
  e.target.reset();
});


class Form {
  constructor(formSelectors) {
    this._openButton = formSelectors.openButton;
    this._closeButton = formSelectors.closeButton;
  }

  _getTemplate() {

  }

  generateForm() {

  }

  _setEventLlisteners() {

  }

  _openForm() {

  }

  _closeForm() {

  }

  _handleSubmit() {

  }

  _resetForm() {

  }
}

class profileForm extends Form {
  constructor() {
    super();
  }
}

class placeForm extends Form {
  constructor() {
    super();
  }
}