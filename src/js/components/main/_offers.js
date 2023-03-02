import Swiper, {Navigation, A11y} from 'swiper'

export function offersSwiperInit() {
  const offersSwiper = new Swiper('.offers__swiper', {
    modules: [Navigation, A11y],
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      921: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      601: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      501: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      }
    },
    navigation: {
      nextEl: '.offers__swiper-next',
      prevEl: '.offers__swiper-prev'
    }
  })
}