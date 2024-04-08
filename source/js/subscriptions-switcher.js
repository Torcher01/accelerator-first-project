const oneMonthButton = document.querySelector('.price__time-choose--one-month');
const sixMonthButton = document.querySelector('.price__time-choose--six-month');
const twelveMonthButton = document.querySelector('.price__time-choose--twelve-month');

const priceSwitcher = (trainerPriceValue, partTimePriceValue, fullDayPriceValue) => {
  const trainerPrice = document.querySelector('.price__item-card-price--trainer');
  const partTimePrice = document.querySelector('.price__item-card-price--part-time');
  const fullDayPrice = document.querySelector('.price__item-card-price--full-day');

  trainerPrice.textContent = trainerPriceValue.toString();
  trainerPrice.setAttribute('value', trainerPriceValue.toString());

  partTimePrice.textContent = partTimePriceValue.toString();
  partTimePrice.setAttribute('value', partTimePriceValue.toString());

  fullDayPrice.textContent = fullDayPriceValue.toString();
  fullDayPrice.setAttribute('value', fullDayPriceValue.toString());
};

oneMonthButton.addEventListener('click', () => {
  priceSwitcher(5000, 1700, 2700);

  oneMonthButton.classList.add('price__time-choose--active');
  sixMonthButton.classList.remove('price__time-choose--active');
  twelveMonthButton.classList.remove('price__time-choose--active');
});

sixMonthButton.addEventListener('click', () => {
  priceSwitcher(30000, 10200, 16200);

  oneMonthButton.classList.remove('price__time-choose--active');
  twelveMonthButton.classList.remove('price__time-choose--active');

  sixMonthButton.classList.add('price__time-choose--active');
});

twelveMonthButton.addEventListener('click', () => {
  priceSwitcher(60000, 20400, 32400);

  oneMonthButton.classList.remove('price__time-choose--active');
  sixMonthButton.classList.remove('price__time-choose--active');

  twelveMonthButton.classList.add('price__time-choose--active');
});
