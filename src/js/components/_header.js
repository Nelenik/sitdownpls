import { header } from './_variables.js'
import Choices from "choices.js";
import { MoveBlock } from './vendor/move-block/move-block.js';

export function initChoices() {
  let searchSelect;
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

//добавление класса в инпут поиска
export function addClassToSearch() {
  const {search} = header;
  search.searchField.addEventListener('input', () =>{
    search.classList.add('js-search-on-input')
  })
  search.searchField.addEventListener('blur', () =>{
    search.classList.remove('js-search-on-input')
  })
}

//настраиваем наблюдение за серым блоком
export function setGreyRowSize() {
  const {headerBlock, observingBlock} = header;
  const resizeObs = new ResizeObserver((entries) => {
    let size = entries[0].contentBoxSize[0].blockSize;
    headerBlock.style.setProperty('--grey-row-height', size >50? `${size}px` : '50px' )
  })
  
  resizeObs.observe(observingBlock)
}


//настраиваем перемещение блоков в хедере
function setOrderInArr(arr, order=[]) {
  let result = [];
  for(let num of order) {
    result.push(arr[num])
  }
  return result
}

export function setHeaderBloksMoving() {
  const {mainMenu, additionalMenu, gridCells, gridContainer} = header
  const order1920 = Array.from(gridCells);
  const order1024 = setOrderInArr(order1920, [0, 1, 5, 2, 3, 4])
  const order768 = setOrderInArr(order1920, [0, 1, 3, 2, 5, 4]);
  const order320 = setOrderInArr(order1920, [2, 0, 3, 1, 5, 4]);

  new MoveBlock({
    breakpoints: [
      {
        solution: "(min-width: 1201px)",
        target: gridContainer,
        elems: order1920,
        method: 'append'
      },
      {
        solution: "(min-width: 992px) and (max-width: 1200px)",
        target: gridContainer,
        elems: order1024,
        method: 'append'
      },
      {
        solution: "(min-width: 577px) and (max-width: 991px)",
        target: gridContainer,
        elems: order768,
        method: 'append'
      },
      {
        solution: "(max-width: 576px)",
        target: gridContainer,
        elems: order320,
        method: 'append'
      },
      {
        solution: "(min-width: 577px)",
        target: gridCells[1],
        elems: [additionalMenu],
        method: 'append'
      },
      {
        solution: "(max-width: 576px)",
        target: mainMenu,
        elems: [additionalMenu],
        method: 'append'
      },
      
    ]
  })
}