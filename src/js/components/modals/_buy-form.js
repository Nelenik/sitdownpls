import { ModalConstructor } from '../vendor/modal/modalconstructor.js'

export function setBuyForm() {
  let buyFormModal = new ModalConstructor('.product__buy-btn', {
    autoOpen: true,
    isStatic: true,
    animTime: 400,
    modalCloseBtnClass: 'modal__close',
    modalOverlayClass: 'buy-modal',
    modalWrapperClass: 'buy-modal__content',
    // modalOpenClass: 'is-open-modal'
  })
}