import Swiper from "swiper/bundle";
import { productCard } from "../_variables";
import { ModalConstructor } from "../vendor/modal/modalconstructor";

function zoomSwiperInit() {
  const zoomSm = new Swiper('.zoom-swiper-sm', {
    slidesPerView: 4,
    spaceBetween: 38,
    navigation: {
      nextEl: '.zoom-swiper-sm__next',
      prevEl: '.zoom-swiper-sm__prev',
    },
  });
  const zoomLg = new Swiper('.zoom-swiper-lg', {
    slidesPerView: 1,
    spaceBetween: 20,
    
    thumbs: {
      swiper: zoomSm
    }
  })
  return zoomLg;
}

export function setZoom() {
  const {zoomBtns} = productCard
  const zoomLarge = zoomSwiperInit();
zoomBtns.forEach(el=> {
  let zoomModal = new ModalConstructor(el, {
    isStatic: true,
    animTime: 400,
    modalCloseBtnClass: 'modal-close',
    modalOverlayClass: 'zoom-modal',
    modalWrapperClass: 'zoom-modal__content',
    modalOpenClass: 'zoom-modal__open'
  })

  el.addEventListener('click', function(e) {
    zoomModal.open();
    zoomLarge.slideTo(this.dataset.slideInd, 0)
  })
})
}