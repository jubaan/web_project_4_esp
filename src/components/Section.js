export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderer(item) {
   
  }

  addItem() {
    this._container.appendChild(this._items)
  }
}