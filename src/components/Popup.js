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
