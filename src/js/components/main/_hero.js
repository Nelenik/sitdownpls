import Swiper from "swiper/bundle";

export function heroSwiperInit() {
  const swiper = new Swiper('.hero__swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    grabCursor: true,
    spaceBetween: 48,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
  })
}