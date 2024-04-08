const priceItems = document.querySelectorAll('.price__item-card-price');

const setPriceShadow = () => {
  priceItems.forEach((item) => {
    item.setAttribute('value', `${item.textContent}`);
  });
};


export {setPriceShadow};
