const priceItems = document.querySelectorAll('.price__item-card-price');

const setPriceAttribute = () => {
  priceItems.forEach((item) => {
    item.setAttribute('value', `${item.textContent}`)
  })
}


export {setPriceAttribute}
