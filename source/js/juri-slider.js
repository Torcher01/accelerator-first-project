import Swiper from 'swiper';
import {Navigation} from "swiper/modules";
const swiper = new Swiper('.juri__slider', {
  slidesPerView: '4',
  spaceBetween: 40,
  direction: 'horizontal',
  loop: 'true',
  modules: [Navigation],
  simulateTouch: false,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 41,
      simulateTouch: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      simulateTouch: true,
      initialSlide: 2,
    },
  },

  navigation: {
    nextEl: '.juri__switcher--right',
    prevEl: '.juri__switcher--left',
  },
});

