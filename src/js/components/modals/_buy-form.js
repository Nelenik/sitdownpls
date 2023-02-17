import { productCard } from '../_variables.js';
import { ModalConstructor } from '../vendor/modal/modalconstructor.js';
import { setThanksModal } from './_thanks-modal.js';
import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

export function setBuyForm() {
  let buyFormModal = new ModalConstructor('.product__buy-btn', {
    autoOpen: true,
    isStatic: true,
    animTime: 400,
    modalCloseBtnClass: 'modal-close',
    modalOverlayClass: 'buy-modal',
    modalWrapperClass: 'buy-modal__content',
    modalOpenClass: 'buy-modal__open'
  })
}

export function setBuyFormValidation() {
  const {buyForm, buyTel} = productCard;
  let im = new Inputmask('+7(999)999-99-99');
  im.mask(buyTel);
  const buyValidation = new JustValidate(buyForm, {
    errorFieldCssClass: ['invalid'],
    errorLabelCssClass: ['invalid-message'],
    successFieldCssClass: ['valid'],
    errorLabelStyle: {
      color: '#FF6972',
    }
  })
  buyValidation
    .addField('[name="buyName"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно'
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа'
      },
      {
        rule: 'customRegexp',
        value: /^[а-яёА-ЯЁ\s]+$/,
        errorMessage: 'Недопустимые символы'
      },
    ])
    .addField('[name="buyTel"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно'
      },
      {
        validator: (value) => {
          let phone = buyTel.inputmask.unmaskedvalue();
          return Boolean(+phone && phone.length === 10);
        },
        errorMessage: 'Введите номер полностью'
      }
    ])
    .addField('[name="buyAgreement"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно'
      }
    ], {
      errorsContainer: '.feedback__agreement'
    })
    .onSuccess((event) => {
      buyForm.closest('.buy-modal').click();
      let trigger = buyForm.buySbmtBtn;
      let thanks = setThanksModal(trigger);
      setTimeout(()=> {thanks.open()}, 200)
      event.target.reset();
      buyValidation.refresh()
    })
}

