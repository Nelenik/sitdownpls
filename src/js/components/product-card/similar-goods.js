import Swiper from "swiper/bundle";
import { productCard } from "../_variables";

export function similarsSwiperInit() {
  const similar = new Swiper('.similar-goods__swiper', {
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 32,
    navigation: {
      nextEl: '.similar-goods__swiper-next',
      prevEl: '.similar-goods__swiper-prev',
    }
  })
}