const juriCards = document.querySelectorAll('.juri__member');
const juriCardsInfo = document.querySelectorAll('.juri__member-info');

juriCards.forEach((card, i) => {
  card.addEventListener('mouseover', () => {
    juriCardsInfo[i].classList.add('juri__member-info--active');
  });

  card.addEventListener('mouseleave', () => {
    juriCardsInfo[i].classList.remove('juri__member-info--active');
  });

  card.addEventListener('focus', () => {
    juriCardsInfo[i].classList.add('juri__member-info--active');
  });

  card.addEventListener('blur', () => {
    juriCardsInfo[i].classList.remove('juri__member-info--active');
  });
})
