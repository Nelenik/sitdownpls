import { ModalConstructor } from "../vendor/modal/modalconstructor";

export function setThanksModal(trigger) {
  const thanksModal = new ModalConstructor(trigger, {
    modalInner: `
    <button class="btn-reset modal-close" type="button">
      <svg>
        <use xlink:href="sprite.svg#close"></use>
      </svg>
    </button>
    <svg class="thanks-modal__svg">
        <use xlink:href="sprite.svg#elefant"></use>
    </svg>
    <p class="thanks-modal__text title-lg">Спасибо, мы вам перезвоним!</p>
    `,
    animTime: 400,
    modalCloseBtnClass: 'modal-close',
    modalOverlayClass: 'thanks-modal',
    modalWrapperClass: 'thanks-modal__content',
    modalOpenClass: 'thanks-modal__open',
    elemToFocus: '.modal-close'
  })
  return thanksModal
}