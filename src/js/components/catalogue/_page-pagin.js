import {Paginator} from '../vendor/paginator.js'
// функция получает номер страницы из url
function getPageNumFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  let pageNum = searchParams.get('page');
  pageNum = +pageNum < 1 ? 1 : +pageNum;
  return pageNum;
}
// метод разделяет массив на несколько массивов по заданному шагу
Array.prototype.cutArray = function (step) {
  const result = [];
  let initPoint = Math.ceil(this.length / step);
  let startInd = 0;
  while (initPoint > 0) {
    let endInd = startInd + step
    result.push(this.slice(startInd, endInd));
    startInd = endInd;
    initPoint--;
  }
  return result; //возвращает массив с частями начального массива по кол-ву страницж
}

function addActiveClass(pages, i) {
  pages[i - 1].forEach(el => el.classList.add('card-active'))
}

function removeActiveClass(arr) {
  arr.forEach(el => el.classList.remove('card-active'))
}
// переключение страниц, а также обновление пагинации
let pages;
function togglePages(cards, step, i) {
  pages = cards.cutArray(step);
  removeActiveClass(cards)
  addActiveClass(pages, i)
  new Paginator('.pagination', {
    totalPages: pages.length,
    enableDots: true,
    enablePrevAndNext: false,
  })
}
// функция настраивает пагинацию и переключение страниц в зависимости от разрешения экрана; mediaOptions это массив с объектами вида [{solution: "(value)", step: number}]
export function setProductPages(mediaOptions) {
  const cards = [...document.querySelectorAll('.catalogue__item')];

  mediaOptions.forEach(media => {
    const { solution, step } = media;
    let mq = window.matchMedia(`${solution}`);
    if (mq.matches) {
      togglePages(cards, step, 1);
    }
    mq.addEventListener('change', function (e) {
      if (e.matches) {
        togglePages(cards, step, 1);
      }
    })
  })

  //переключение страниц при клике на кнопку
  document.addEventListener('click', function (e) {
    let target = e.target.closest('.js-enable');
    if (!target) return;
    removeActiveClass(cards);
    addActiveClass(pages, +target.dataset.page)
  })
  //переключение страниц при нажатии кнопок вперед и назад браузера
  window.addEventListener('popstate', function (e) {
    removeActiveClass(cards);
    addActiveClass(pages, getPageNumFromUrl());
    const currentActiveBtn = document.querySelector('.current');
    const allBtns = document.querySelectorAll('.js-enable');
    currentActiveBtn.classList.remove('current')
    allBtns.forEach(el => {
      if (+el.dataset.page === getPageNumFromUrl()) {
        el.classList.add('current')
      }
    })

  })

}