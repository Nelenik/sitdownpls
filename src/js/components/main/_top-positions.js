import { mainPage } from '../_variables.js'
//добавляем активный класс. находим сколько элементов имеют активный класс, это стартовый индекс, конечный индекс это сумма стартового с количеством карточек к открытию
function addActiveClass(arr, count) {
  let i = getActiveCardsCount()
  arr.slice(i, i + count).forEach(el => { el.classList.add('top__item--active') })
}
// получаем длину массива карточек с активным классом
function getActiveCardsCount() {
  return document.querySelectorAll('.top__item--active').length
}
// настраиваем показ карточек в зависимости от настроек разрешения
function showCards(options) {
  const { mediaOptions, elemsArr, btn } = options
  let toOpen;
  mediaOptions.forEach(item => {
    const { solution, shown, toShow } = item;

    let mq = window.matchMedia(`${solution}`);
    if (mq.matches) {
      addActiveClass(elemsArr, shown);
      toOpen = toShow;
    }
    mq.addEventListener('change', function (e) {
      if (e.matches) {
        elemsArr.forEach(el => el.classList.remove('top__item--active'))
        btn.classList.remove('top__btn--hidden')
        addActiveClass(elemsArr, shown)
        toOpen = toShow
      }
    })
  })
  btn.addEventListener('click', function (e) {
    addActiveClass(elemsArr, toOpen);
    if (getActiveCardsCount() === elemsArr.length) this.classList.add('top__btn--hidden')
  })
}

export function showMoreCards() {
  const {moreBtn, topItems} = mainPage
  const options = {
    mediaOptions: [
      {
        solution: "(min-width: 1200px)",
        shown: 8,
        toShow: 4,
      },
      {
        solution: "(min-width: 992px) and (max-width: 1200px)",
        shown: 6,
        toShow: 3,
      },
      {
        solution: "(max-width: 991px)",
        shown: 6,
        toShow: 2,
      }
    ],
    btn: moreBtn,
    elemsArr: [...topItems],
  }

  showCards(options)
}

