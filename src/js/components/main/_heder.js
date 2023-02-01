import { main } from '../_variables.js'
import Choices from "choices.js";

export function initChoices() {
  let searchSelect;
  // const region = new Choices('[name="region"]', {
  //   searchEnabled: false,
  //     itemSelectText: '',
  //     allowHTML: true,
  //     shouldSort: false,
  // })

  // const searchSelect = new Choices('[name="searchSelect"]', {
  //   searchEnabled: false,
  //     itemSelectText: '',
  //     allowHTML: true,
  //     shouldSort: false,
  // })

  main.selects.forEach(el => {
    const select = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      allowHTML: true,
      shouldSort: false,
    })
    if (el.name === 'searchSelect') {
      searchSelect = select;
      console.log(searchSelect)
    }
  })
};
