const preview = function (e) {
  const previewImageContainer = document.querySelector(
    '.modal-preview__container'
  );
  const previewImage = previewImageContainer.querySelector(
    '.modal-preview__image'
  );
  const previewTitle = previewImageContainer.querySelector(
    '.modal-preview__title'
  );
  previewImage.src = e.target.src;
  previewImage.alt = e.target.alt;
  previewTitle.innerHTML = e.target.alt;
};
