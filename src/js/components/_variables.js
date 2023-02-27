export const header = {
  selects: document.querySelectorAll('[name="region"], [name="searchSelect"]'),
  search: document.querySelector('[name="search"]'),
  containers: document.querySelectorAll('.header__row .container'),
  movedElems: {
    contacts: document.querySelector('.header__contacts-wrap'),
    addMenu: document.querySelector('.additional-menu'),
    logo: document.querySelector('.header__logo'),
    mainMenuWrap: document.querySelector('.header__main-menu'),
    mainMenu: document.querySelector('.js-main-menu'),
    navBtns: document.querySelector('.header__nav-btns'),
  },
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
  rangeMax: document.querySelector('.field-max'),
  filterBtns: document.querySelectorAll('.js-filter-btn'),

}

export const productCard = {
  buyForm: document.querySelector('[name="buyForm"]'),
  buyTel: document.querySelector('[name="buyTel"]'),
  zoomBtns: document.querySelectorAll('.js-zoom-btn')
}