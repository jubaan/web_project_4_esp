const editProfileButton = document.querySelector('.profile__button_edit');

editProfileButton.addEventListener('click', function () {
  const editProfileModalForm = document.querySelector('.modal-form__container.edit-profile');

  editProfileModalForm.classList.remove('offscreen');
});

const addNewCardButton = document.querySelector('.profile__button_add');

addNewCardButton.addEventListener('click', function () {
  const addNewCardModalForm = document.querySelector(
    '.modal-form__container.add-newcard'
  );

  addNewCardModalForm.classList.remove('offscreen');
});