import Section from './components/Section.js';
import './pages/index.css';
import Card from './components/Card.js';
import { places } from './components/places.js';
import FormValidator from './components/FormValidator.js';
import logoImage from './images/logo.svg';
import addIcon from './images/add-icon.svg';
import closeIcon from './images/close-icon.svg';
import editIcon from './images/edit-icon.svg';
import trashIcon from './images/trash-icon.svg';


// Add new Card Form

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

  const place = {
    name: imageTitle.value,
    image: imageURL.value,
  };

  const newCard = new Card(place).generateCard();

  elementsSection.prepend(newCard);
  addNewCardToArray(newCard);

  addNewCardForm.classList.add('offscreen');
  e.target.reset();
});

// Add cards to elements section
const elements = document.querySelector('.elements');

const addElement = function () {
  places.forEach((elementDetails) => {
    const cardElement = new Card(elementDetails);

    elements.append(cardElement.generateCard());
  });
};

addElement();

// Edit profile form
const modalForm = document.querySelector('.modal-form__container.edit-profile');
let profileNameOld = modalForm.querySelector('#name');
let profession = modalForm.querySelector('#profession');
let profileNameNew = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

modalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (profileNameOld.value.length > 0 && profession.value.length > 0) {
    profileNameNew.innerText = profileNameOld.value;
    profileProfession.innerText = profession.value;
    modalForm.classList.add('offscreen');
  }
});

const profile = {
  form: '.form.profile-form',
  input: '.form__input',
  submit: '.form__submit',
};
const profileFormValidation = new FormValidator(profile);
profileFormValidation.enableValidation();

const card = {
  form: '.form.card-form',
  input: '.form__input',
  submit: '.form__submit',
};
const cardFormValidation = new FormValidator(card);
cardFormValidation.enableValidation();

document.getElementById('logo').src = logoImage;
document.getElementById('edit-icon').src = editIcon;
document.getElementById('add-icon').src = addIcon;

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

      previewImageContainer.classList.remove('offscreen');
    });
  });
};

openPreview();

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
