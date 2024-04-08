import Swiper from 'swiper';
import {Navigation} from "swiper/modules";
const swiper = new Swiper('.juri__slider', {
  slidesPerView: '4',
  spaceBetween: 40,
  direction: 'horizontal',
  loop: 'true',
  modules: [Navigation],
  simulateTouch: false,

  navigation: {
    nextEl: '.juri__switcher--right',
    prevEl: '.juri__switcher--left',
  },
});

