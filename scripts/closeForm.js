window.addEventListener('load', function () {
  const closeButton = document.querySelector('.modal-form__close-button');

  closeButton.addEventListener('click', function () {
    const modalForm = document.querySelector(".modal-form__container");
    
    modalForm.classList.add("offscreen");
  });
});