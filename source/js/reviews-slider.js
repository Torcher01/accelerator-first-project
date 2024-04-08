import Swiper from 'swiper';
import {Navigation} from "swiper/modules";
const swiper = new Swiper('.reviews__review', {
  slidesPerView: '1',
  direction: 'horizontal',
  modules: [Navigation],
  simulateTouch: false,

  navigation: {
    nextEl: '.reviews__switcher--right',
    prevEl: '.reviews__switcher--left',
  },
});

