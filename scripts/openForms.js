const editProfileButton = document.querySelector('.profile__button_edit');

editProfileButton.addEventListener('click', function () {
  const editProfileModalForm = document.querySelector(
    '.modal-form__container.edit-profile'
  );

  editProfileModalForm.classList.remove('offscreen');
});

const addNewCardButton = document.querySelector('.profile__button_add');

addNewCardButton.addEventListener('click', function () {
  const addNewCardModalForm = document.querySelector(
    '.modal-form__container.add-newcard'
  );

  addNewCardModalForm.classList.remove('offscreen');
});

const openPreview = function () {
  const previewImageButtons = Array.from(
    document.querySelectorAll('.element__place-image')
  );

  previewImageButtons.map((previewImageButton) => {
    previewImageButton.addEventListener('click', function (e) {
      const previewImageContainer = document.querySelector(
        '.modal-preview__container'
      );

      preview(e);
      previewImageContainer.classList.remove('offscreen');
    });
  });
};

openPreview();

