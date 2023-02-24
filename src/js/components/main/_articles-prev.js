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
      577: {
        slidesPerView: 2
      }
    },
    navigation: {
      nextEl: '.articles__swiper-next',
      prevEl: '.articles__swiper-prev'
    }
  })
}