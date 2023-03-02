import { productCard } from "../_variables";
import { ModalConstructor } from "../vendor/modal/modalconstructor";
import Swiper, {Navigation, Thumbs, A11y} from 'swiper'

function zoomSwiperInit() {
  const zoomSm = new Swiper('.zoom-swiper-sm', {
    modules: [Navigation, Thumbs, A11y],
    navigation: {
      nextEl: '.zoom-swiper-sm-next',
      prevEl: '.zoom-swiper-sm-prev',
    },
    breakpoints: {
      1201: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      921: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      601: {
        slidesPerView: 2,
        spaceBetween: 38,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      }
    }
  });
  const zoomLg = new Swiper('.zoom-swiper-lg', {
    modules: [Navigation, Thumbs, A11y],
    slidesPerView: 1,
    spaceBetween: 20,

    thumbs: {
      swiper: zoomSm
    }
  })
  return zoomLg;
}

export function setZoom() {
  const { zoomBtns } = productCard
  const zoomLarge = zoomSwiperInit();
  zoomBtns.forEach(el => {
    let zoomModal = new ModalConstructor(el, {
      isStatic: true,
      animTime: 400,
      modalCloseBtnClass: 'modal-close',
      modalOverlayClass: 'zoom-modal',
      modalWrapperClass: 'zoom-modal__content',
      modalOpenClass: 'zoom-modal__open'
    })

    el.addEventListener('click', function (e) {
      zoomModal.open();
      zoomLarge.slideTo(this.dataset.slideInd, 0)
    })
  })
}