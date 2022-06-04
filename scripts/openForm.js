window.addEventListener('load', function () {
  const editButton = document.querySelector(".icon_type_edit");
  
  editButton.addEventListener('click', function () {
    const modalForm = document.querySelector(".modal-form__container");

    modalForm.classList.remove("offscreen");
  });
});