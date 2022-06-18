import { hideInputError } from "./validate";

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

  if (!imageTitle.validity.valid || !imageURL.validity.valid) {
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
