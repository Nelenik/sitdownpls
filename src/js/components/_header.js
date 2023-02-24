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
  const { search } = header;
  search.searchField.addEventListener('input', () => {
    search.classList.add('js-search-on-input')
  })
  search.searchField.addEventListener('blur', () => {
    search.classList.remove('js-search-on-input')
  })
}

//настраиваем наблюдение за серым блоком. и настраиваем его размеры и положение
export function setGreyRowSize() {
  const { headerBlock, observing1, observing2 } = header;
  // resizeObserver следит за указаными блоками
  const resizeObs = new ResizeObserver((entries) => {
    console.log(entries)
    let size1 = entries[0].borderBoxSize[0].blockSize;
    console.log(size1)
    // let size2;
    if (entries[1]) {
      let size2 = entries[1].borderBoxSize[0].blockSize;
      headerBlock.style.setProperty('--grey-row-top', `${size2}px`)
    }
    headerBlock.style.setProperty('--grey-row-height', size1 > 50 ? `${size1}px` : '50px');
    // if (size2) {
    //   headerBlock.style.setProperty('--grey-row-top', `${size2}px`)
    // }
  })

  // функции переключения  наблюдения
  let funcs = {
    func1: () => {
      resizeObs.observe(observing1);
      resizeObs.unobserve(observing2);
      headerBlock.style.setProperty('--grey-row-top', '')
    },
    func2: () => {
      resizeObs.observe(observing1);
      resizeObs.observe(observing2);
    },
    func3: () => {
      resizeObs.unobserve(observing1);
      resizeObs.unobserve(observing2);
      headerBlock.style.setProperty('--grey-row-top', '')
      headerBlock.style.setProperty('--grey-row-height', '')
    }
  };
  // медиазапросы
  let mQ = [
    window.matchMedia("(min-width: 1201px)"),
    window.matchMedia("(min-width: 601px) and (max-width: 1200px)"),
    window.matchMedia("(max-width: 600px)")
  ]
// переключение наблюдения в зависимости от медиа запросов
  function toggleMediaObs() {
    let values = Object.values(funcs)
    mQ.forEach((el, i)=>{
      if(el.matches) {values[i]()}
      el.addEventListener('change', function(e) {
        if(e.matches) values[i]()
      })
    })
  }
  toggleMediaObs()
}


//настраиваем перемещение блоков в хедере
function setOrderInArr(arr, order = []) {
  let result = [];
  for (let num of order) {
    result.push(arr[num])
  }
  return result
}

export function setHeaderBloksMoving() {
  const { mainMenu, additionalMenu, gridCells, gridContainer } = header
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
        solution: "(min-width: 921px) and (max-width: 1200px)",
        target: gridContainer,
        elems: order1024,
        method: 'append'
      },
      {
        solution: "(min-width: 601px) and (max-width: 920px)",
        target: gridContainer,
        elems: order768,
        method: 'append'
      },
      {
        solution: "(max-width: 600px)",
        target: gridContainer,
        elems: order320,
        method: 'append'
      },
      {
        solution: "(min-width: 601px)",
        target: gridCells[1],
        elems: [additionalMenu],
        method: 'append'
      },
      {
        solution: "(max-width: 600px)",
        target: mainMenu,
        elems: [additionalMenu],
        method: 'append'
      },

    ]
  })
}

// бургер-меню
export function setBurgerMenu() {
  const { mainMenu, burger } = header;
  burger.addEventListener('click', function (e) {
    this.classList.toggle('js-burger--active')
    mainMenu.classList.toggle('js-main-menu--active');
    document.body.classList.toggle('stop-scroll');
    document.documentElement.classList.toggle('stop-scroll')
  })
  mainMenu.addEventListener('click', function (e) {
    e._isClickedMenu = true;
  })

  document.addEventListener('click', function (e) {
    if ((!e.target.closest('.main-menu__item') && e._isClickedMenu) || e.target.closest('.js-burger')) return;
    burger.classList.remove('js-burger--active');
    mainMenu.classList.remove('js-main-menu--active');
    document.body.classList.remove('stop-scroll');
    document.documentElement.classList.remove('stop-scroll')
  })

}