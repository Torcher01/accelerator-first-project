const accordionCollection = document.querySelectorAll('.faq__item-accordion');
const accordionSummaryCollection = document.querySelectorAll('.faq__item-accordion summary');
const accordionTextCollection = document.querySelectorAll('.faq__item-accordion p');
const accordionText = document.querySelector('.faq__item-accordion p');
const accordionExpandButtons = document.querySelectorAll('.faq__item-expand');

const accordionExpandIcons = document.querySelectorAll('.faq__item-expand-icon')
const accordionCollapseIcons = document.querySelectorAll('.faq__item-collapse-icon');

accordionSummaryCollection.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault()
  });
});

accordionTextCollection.forEach((item) => {
  item.style.maxHeight = '0px';
});

accordionText.style.maxHeight = accordionTextCollection[0].scrollHeight + 'px';

accordionExpandButtons.forEach((item, i) => {
  item.addEventListener('click', () => {
    let style = getComputedStyle(accordionTextCollection[i]);

    if(style.maxHeight === '0px') {
      accordionCollection[i].setAttribute('open', '');
      accordionTextCollection[i].style.maxHeight = accordionTextCollection[i].scrollHeight + 'px';
      item.classList.add('faq__item-expand--active');
      accordionExpandIcons[i].classList.add('faq__item-expand-icon--disabled');
      accordionCollapseIcons[i].classList.add('faq__item-collapse-icon--active');
    } else {
      accordionTextCollection[i].style.maxHeight = '0px';
      accordionCollection[i].removeAttribute('open');
      item.classList.remove('faq__item-expand--active');
      accordionExpandIcons[i].classList.remove('faq__item-expand-icon--disabled');
      accordionCollapseIcons[i].classList.remove('faq__item-collapse-icon--active');
    }
  })
})
