export const header = {
  selects: document.querySelectorAll('[name="region"], [name="searchSelect"]'),
  search: document.querySelector('[name="search"]'),
  headerBlock: document.querySelector('.header'),
  observing1: document.querySelector('.additional-menu__list'),
  observing2: document.querySelector('.cell-1'),
  gridCells: document.querySelectorAll('.header-grid__cell'),
  gridContainer: document.querySelector('.header-grid'),
  mainMenu: document.querySelector('.js-main-menu'),
  additionalMenu: document.querySelector('.additional-menu'), 
  burger: document.querySelector('.js-burger')
}

export const mainPage = {
  topItems: document.querySelectorAll('.top__item--inactive'),
  moreBtn: document.querySelector('.top__btn'),
  rqstForm: document.forms.rqstForm,
}

export const cataloguePage = {
  rangeBar: document.querySelector('.price__bar-wrap'),
  rangeMin: document.querySelector('.field-min'),
  rangeMax: document.querySelector('.field-max')
}

export const productCard = {
  buyForm: document.querySelector('[name="buyForm"]'),
  buyTel: document.querySelector('[name="buyTel"]'),
  zoomBtns: document.querySelectorAll('.js-zoom-btn')
}