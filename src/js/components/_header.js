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

// перемещаем блоки на разных разрешениях
export function setHeaderBloksMoving() {
  let { containers, movedElems, search } = header;
  const { contacts, addMenu, logo, mainMenuWrap, mainMenu, navBtns } = movedElems;

  new MoveBlock({
    breakpoints: [
      {
        solution: "(min-width: 1201px)",
        target: containers[0],
        elems: [contacts, addMenu],
        method: 'append',
      },
      {
        solution: "(min-width: 1201px)",
        target: containers[1],
        elems: [],
        method: 'append',
      },
      {
        solution: "(min-width: 1201px)",
        target: containers[2],
        elems: [logo, mainMenuWrap],
        method: 'append',
      },
      {
        solution: "(min-width: 1201px)",
        target: containers[3],
        elems: [search, navBtns],
        method: 'append',
      },
      {
        solution: "(min-width: 921px) and (max-width: 1200px)",
        target: containers[0],
        elems: [contacts],
        method: 'append'
      },
      {
        solution: "(min-width: 921px) and (max-width: 1200px)",
        target: containers[1],
        elems: [addMenu, navBtns],
        method: 'append'
      },
      {
        solution: "(min-width: 921px) and (max-width: 1200px)",
        target: containers[2],
        elems: [logo, mainMenuWrap],
        method: 'append'
      },
      {
        solution: "(min-width: 601px) and (max-width: 920px)",
        target: containers[0],
        elems: [contacts],
        method: 'append'
      },
      {
        solution: "(min-width: 601px) and (max-width: 920px)",
        target: containers[1],
        elems: [addMenu],
        method: 'append'
      },
      {
        solution: "(min-width: 601px) and (max-width: 920px)",
        target: containers[2],
        elems: [mainMenuWrap, logo, navBtns],
        method: 'append'
      },
      {
        solution: "(max-width: 600px)",
        target: containers[0],
        elems: [logo],
        method: 'append'
      },
      {
        solution: "(max-width: 600px)",
        target: containers[1],
        elems: [contacts],
        method: 'append'
      },
      {
        solution: "(max-width: 600px)",
        target: containers[2],
        elems: [mainMenuWrap, navBtns],
        method: 'append'
      },
      {
        solution: "(max-width: 600px)",
        target: mainMenu,
        elems: [addMenu],
        method: 'append'
      },
    ]
  })
}

// бургер-меню
export function setBurgerMenu() {
  const { movedElems, burger } = header;
  const { mainMenu } = movedElems;
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