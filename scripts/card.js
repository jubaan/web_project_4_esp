const previewImageContainer = document.querySelector(
  '.modal-preview__container'
);
const previewImage = previewImageContainer.querySelector(
  '.modal-preview__image'
);
const previewTitle = previewImageContainer.querySelector(
  '.modal-preview__title'
);

export default class Card {
  constructor(place, cardSelector = '#elementCard') {
    this._name = place.name;
    this._image = place.image;
    this._isLiked = false;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventLlisteners();

    this._element.querySelector('.element__place-name').textContent =
      this._name;
    this._element.querySelector('.element__place-image').src = this._image;
    this._element.querySelector('.element__place-image').alt = this._name;
    this._element.querySelector('.element__form-label').htmlFor = this._name
      .toLowerCase()
      .split(' ')
      .join('-');
    this._element.querySelector('.form__item_type_checkbox').name = this._name
      .toLowerCase()
      .split(' ')
      .join('-');
    this._element.querySelector('.form__item_type_checkbox').id = this._name
      .toLowerCase()
      .split(' ')
      .join('-');
    this._element.querySelector('.form__item_type_checkbox').value = this._name
      .toLowerCase()
      .split(' ')
      .join('-');

    return this._element;
  }

  _setEventLlisteners() {
    this._element
      .querySelector('.element__icon.icon_type_trash')
      .addEventListener('click', (e) => {
        this._removeCard(e);
      });

    this._element
      .querySelector('.form__item_type_checkbox')
      .addEventListener('click', () => {
        this._toggleLike();
      });

    this._element
      .querySelector('.element__place-image')
      .addEventListener('click', (e) => {
        this._openPreview(e);
      });
  }

  _removeCard(e) {
    e.target.parentElement.remove();
  }

  _preview(e) {
    previewImage.src = e.target.src;
    previewImage.alt = e.target.alt;
    previewTitle.textContent = e.target.alt;
  }

  _openPreview(e) {
    const previewImageContainer = document.querySelector(
      '.modal-preview__container'
    );

    this._preview(e);
    previewImageContainer.classList.remove('offscreen');
  }

  _toggleLike() {
    this._element._isLiked = !this._element._isLiked;
    this.checked = !this._element.checked;
  }
}
