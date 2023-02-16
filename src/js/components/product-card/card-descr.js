import Swiper from "swiper/bundle";
import { productCard } from "../_variables";

export function productSwiperInit() {
  const preview = new Swiper('.preview-swiper', {
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 38,
  });
  const galery = new Swiper('.galery-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.galery-swiper__next',
      prevEl: '.galery-swiper__prev',
    },
    thumbs: {
      swiper: preview
    }
  })
}

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