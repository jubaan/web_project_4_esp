import Card from './Card.js';

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
  newCard.addEventListener('click', openPreview());

  addNewCardForm.classList.add('offscreen');
  e.target.reset();
});
