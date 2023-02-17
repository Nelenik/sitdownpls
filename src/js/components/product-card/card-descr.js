import Swiper from "swiper/bundle";
import { productCard } from "../_variables";
import { ModalConstructor } from "../vendor/modal/modalconstructor";

export function productSwiperInit() {
  const preview = new Swiper('.preview-swiper', {
    slidesPerView: 4,
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



