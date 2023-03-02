import Swiper, {Navigation, A11y} from 'swiper'

export function articlesSwiperInit() {
  const articlesSwiper = new Swiper('.articles__swiper', {
    modules: [Navigation, A11y],
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