import {main} from "../_variables.js"
import Swiper from "swiper/bundle";

export function offersSwiperInit() {
  const offersSwiper = new Swiper('.offers__swiper', {
    grabCursor: true,
    spaceBetween: 32,
    // slidesPerView: 'auto',
    
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
      },
      921: {
        slidesPerView: 3,
      },
      601: {
        slidesPerView: 2,
        slidesPerGroup: 3,
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      }
    },
    navigation: {
      nextEl: '.offers__swiper-next',
      prevEl: '.offers__swiper-prev'
    }
  })
}