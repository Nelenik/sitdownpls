import {main} from "../_variables.js"
import Swiper from "swiper/bundle";

export function articlesSwiperInit() {
  const articlesSwiper = new Swiper('.articles__swiper', {
    // slidesPerView: 2,
    spaceBetween: 32,
    breakpoints: {
      1200: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      500: {
        slidesPerView: 2
      }, 
      0: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: '.articles__swiper-next',
      prevEl: '.articles__swiper-prev'
    }
  })
}