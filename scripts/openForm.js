const editButton = document.querySelector('.profile__button_edit');

editButton.addEventListener('click', function () {
  const modalForm = document.querySelector('.modal-form__container');

  modalForm.classList.remove('offscreen');
});
