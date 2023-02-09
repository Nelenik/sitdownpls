import {main} from "../_variables.js"
import Swiper from "swiper/bundle";

export function offersSwiperInit() {
  const offersSwiper = new Swiper('.offers__swiper', {
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.swiper-nav__next',
      prevEl: '.swiper-nav__prev'
    }
  })
}