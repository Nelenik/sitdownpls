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
        spaceBetween: 32,
      }, 
      921: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      601: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 16,
      }
    }
  })
}