import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor() {
    super();
  }

  _getInputValues() {}

  _handleEscClose() {
    this.super();
    this._element.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  setEventListeners() {
    this._element.addEventListener("click", () => {
      this.open()
    })

    this._element.addEventListener('click', () => {
      this.close();
    });
  }

  open() {}

  close() {}
}
