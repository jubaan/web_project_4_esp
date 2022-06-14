const initialCards = [
  {
    name: 'Valle de Yosemite',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lago Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Montañas Calvas',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Parque Nacional de la Vanoise',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];

const cardElementTemplate = document.querySelector('#elementCard').content;
const elements = document.querySelector('.elements');

initialCards.forEach((elementDetails) => {
  const cardElement = cardElementTemplate
    .querySelector('.element')
    .cloneNode(true);

  cardElement.querySelector('.element__place-name').textContent =
    elementDetails.name;
  cardElement.querySelector('.element__place-image').src = elementDetails.link;
  cardElement.querySelector('.element__place-image').alt = elementDetails.name;
  cardElement.querySelector('.element__form-label').htmlFor =
    elementDetails.name.toLowerCase().split(' ').join('-');
  cardElement.querySelector('.form__item_type_checkbox').name =
    elementDetails.name.toLowerCase().split(' ').join('-');
  cardElement.querySelector('.form__item_type_checkbox').id =
    elementDetails.name.toLowerCase().split(' ').join('-');
  cardElement.querySelector('.form__item_type_checkbox').value =
    elementDetails.name.toLowerCase().split(' ').join('-');

  elements.append(cardElement);
});

const likeButton = cardElementTemplate.cardElementTemplate
  .querySelector('.element')
  .cloneNode(true)
  .querySelector('.form__item');
likeButton.addEventListener('click', function () {
  likeButton.checked = true;
});
