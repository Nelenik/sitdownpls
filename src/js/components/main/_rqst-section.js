import { mainPage } from '../_variables.js';
import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

export function formValidation() {
  const { rqstForm } = mainPage;
  const tel = rqstForm.rqstTel;
  let im = new Inputmask('+7(999)999-99-99');
  im.mask(tel);
  const rqstValidation = new JustValidate(rqstForm, {
    errorFieldCssClass: ['invalid'],
    errorLabelCssClass: ['invalid-message'],
    successFieldCssClass: ['valid'],
    errorLabelStyle: {
      color: '#FF6972',
    }
  })
  rqstValidation
    .addField('[name="rqstName"]', [
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
    .addField("[name='rqstEmail']", [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно'
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат'
      }
    ])
    .addField('[name="rqstTel"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно'
      },
      {
        validator: (value) => {
          let phone = tel.inputmask.unmaskedvalue();
          return Boolean(+phone && phone.length === 10);
        },
        errorMessage: 'Введите номер полностью'
      }
    ])
    .addField('[name="rqstAgreement"]', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательно'
      }
    ], {
      errorsContainer: '.feedback__agreement'
    })
    // .onSuccess(async(event) => {
    //   let form = event.target;
    //   let formData = new FormData(form);
    //   // disableInputs(form.elements);
    //   let response = await fetch('send-mail.php', {
    //     method: 'POST',
    //     body: formData
    //   });
    //   if(response.ok) {
    //     let result = await response.json();
    //     alert(result.message)
    //     form.reset();
    //     // enableInputs(form.elements);
    //   } else {
    //     alert('Ошибка')
    //     // enableInputs(form.elements)
    //   }
    // })
}

// function disableInputs(inputs) {
//   inputs.submitBtn.classList.add('sending');
//   [...inputs].forEach(el => {el.disabled = true});
// }

// function enableInputs(inputs) {
//   inputs.submitBtn.classList.remove('sending');
//   [...inputs].forEach(el =>{el.disabled = false});
// }