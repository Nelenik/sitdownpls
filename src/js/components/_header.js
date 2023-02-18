import { header } from './_variables.js'
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

  header.selects.forEach(el => {
    const select = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      allowHTML: true,
      shouldSort: false,
      placeholder: true,
    })
    if (el.name === 'searchSelect') {
      searchSelect = select;
      console.log(searchSelect)
    }
  })
};

export function addClassToSearch() {
  const {search} = header;
  search.searchField.addEventListener('input', () =>{
    search.classList.add('js-search-on-input')
  })
  search.searchField.addEventListener('blur', () =>{
    search.classList.remove('js-search-on-input')
  })
}


export function setGreyRowSize() {
  const {headerBlock, observingBlock} = header;
  const resizeObs = new ResizeObserver((entries) => {
    let size = entries[0].contentBoxSize[0].blockSize;
    headerBlock.style.setProperty('--grey-row-height', size >50? `${size}px` : '50px' )
  })
  
  resizeObs.observe(observingBlock)
}
