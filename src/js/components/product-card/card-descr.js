import Swiper, {Navigation, Thumbs, A11y} from 'swiper'

export function productSwiperInit() {
  const preview = new Swiper('.preview-swiper', {
    modules: [Navigation, Thumbs, A11y],
    breakpoints: {
      1201: {
        slidesPerView: 4,
        spaceBetween: 30,
        direction: 'horizontal',
      },
      921: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        direction: 'horizontal'
      },
      601: {
        slidesPerView: 4,
        spaceBetween: -4,
        direction: 'vertical',
      },
      501: {
        slidesPerView: 3,
        spaceBetween:20,
        direction: 'horizontal',
      },
      0: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        direction: 'horizontal'
      }
    }
  });
  const galery = new Swiper('.galery-swiper', {
    modules: [Navigation, Thumbs, A11y],
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



