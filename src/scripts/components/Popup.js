export default class Popup {
  constructor() {}

  _handleEscClose() {}

  setEventListeners() {
    this._element.addEventListener('keypress', (e) => {
      if (e.key === 'escape') {
      }
    });
  }

  open() {}

  close() {}
}

export class PopupWithImage extends Popup {
  constructor() {
    super();
  }

  _handleEscClose() {}

  setEventListeners() {}

  open() {}

  close() {}
}

export class PopupWithForm extends Popup {
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

  setEventListeners() {}

  open() {}

  close() {}
}
