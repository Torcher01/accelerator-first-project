const subscriptionCards = document.querySelectorAll('.price__item-card');
const buySubscriptionButtons = document.querySelectorAll('.price__item-card-buy');

subscriptionCards.forEach((card, i) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('price__item-card--hover');
    buySubscriptionButtons[i].classList.add('price__item-card-buy--hover');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('price__item-card--hover');
    buySubscriptionButtons[i].classList.remove('price__item-card-buy--hover');
  });

  buySubscriptionButtons[i].addEventListener('focus', () => {
    card.classList.add('price__item-card--hover');
    buySubscriptionButtons[i].classList.add('price__item-card-buy--hover');
  });

  buySubscriptionButtons[i].addEventListener('blur', () => {
    card.classList.remove('price__item-card--hover');
    buySubscriptionButtons[i].classList.remove('price__item-card-buy--hover');
  })
})
