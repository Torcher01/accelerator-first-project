const form = document.querySelector('.form__form');
const nameLabel = document.querySelector('.form__name-label');
const phoneLabel = document.querySelector('.form__phone-label');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('tel');


nameInput.removeAttribute('required');
phoneInput.removeAttribute('required');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValidName = (name) => {
    const pattern = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    return pattern.test(name);
  }

  const isValidPhone = (phone) => {
    const pattern = /^[0-9\s]+$/;
    return pattern.test(phone);
  }

  const name = nameInput.value;
  const phone = phoneInput.value;

  if (!isValidPhone(phone)) {
    phoneInput.classList.add('form__input-error');
    phoneLabel.classList.add('form__label-error-phone');
  } else {
    phoneInput.classList.remove('form__input-error');
    phoneLabel.classList.remove('form__label-error-phone');
  }

  if (!isValidName(name)) {
    nameInput.classList.add('form__input-error');
    nameLabel.classList.add('form__label-error-name');
  } else {
    nameInput.classList.remove('form__input-error');
    nameLabel.classList.remove('form__label-error-name');
  }

  if (!name || !phone || !isValidName(name) || !isValidPhone(phone)) {
    return;
  }

  form.submit();
})
