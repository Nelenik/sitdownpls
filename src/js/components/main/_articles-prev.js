import {main} from "../_variables.js"
import Swiper from "swiper/bundle";

export function articlesSwiperInit() {
  const articlesSwiper = new Swiper('.articles__swiper', {
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
      nextEl: '.articles__swiper-next',
      prevEl: '.articles__swiper-prev'
    }
  })
}