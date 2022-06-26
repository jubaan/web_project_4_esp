import Card from './Card.js';
import { places } from './places.js';

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
