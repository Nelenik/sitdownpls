import Swiper from "swiper/bundle";
import { productCard } from "../_variables";

export function similarsSwiperInit() {
  const similar = new Swiper('.similar-goods__swiper', {
    
    grabCursor: true,
    spaceBetween: 32,
    navigation: {
      nextEl: '.similar-goods__swiper-next',
      prevEl: '.similar-goods__swiper-prev',
    }, 
    breakpoints: {
      1201: {
        slidesPerView: 4,
      }, 
      921: {
        slidesPerView: 3,
      },
      601: {
        slidesPerView: 2,
      }
    }
  })
}