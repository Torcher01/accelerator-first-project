const subscriptionBlock = document.querySelector('.price');
const buySubscriptionButton = document.querySelector('.hero__subscription-button');

const scrollToSubscriptionBlock = () => {
  subscriptionBlock.scrollIntoView({block: 'start', behavior: 'smooth'})
}

buySubscriptionButton.addEventListener('click', scrollToSubscriptionBlock)
