const modalForm = document.querySelector('.modal-form__container');
let name = modalForm.querySelector('#name');
let profession = modalForm.querySelector('#profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

modalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (name.value.length > 0 && profession.value.length > 0) {
    profileName.innerText = name.value;
    profileProfession.innerText = profession.value;
  }

  modalForm.classList.add('offscreen');
});
