const signInButton = document.getElementById('signInButton');
const popupElement = document.getElementById('popupElement');

const signInButtonHandler = (evt) => {
  evt.preventDefault();
  openPopup();
  const popupCloseButton = document.getElementById('popupCloseButton');
  popupCloseButton.addEventListener('click', closePopup);
}

const openPopup = () => {
  popupElement.classList.remove('popup--closed')
}

const closePopup = () => {
  popupElement.classList.add('popup--closed');
}

if (signInButton) {
  signInButton.addEventListener('click', signInButtonHandler);
}
