const modalForm = document.querySelector('.modal-form__container.edit-profile');
let profileNameOld = modalForm.querySelector('#name');
let profession = modalForm.querySelector('#profession');
let profileNameNew = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

modalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (profileNameOld.value.length > 0 && profession.value.length > 0) {
    profileNameNew.innerText = profileNameOld.value;
    profileProfession.innerText = profession.value;
  }

  modalForm.classList.add('offscreen');
});
