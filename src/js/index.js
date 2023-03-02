import { initChoices, addClassToSearch, setHeaderBloksMoving, setBurgerMenu, setMenuHeight} from './components/_header.js';
import { heroSwiperInit } from './components/main/_hero.js';
import { offersSwiperInit } from './components/main/_offers.js';
import { showMoreCards } from './components/main/_top-positions.js';
import { MoveBlock } from './components/vendor/move-block/move-block.js';
import { SetFocus } from './components/vendor/set-focus.js';
import { articlesSwiperInit } from './components/main/_articles-prev.js';
import { formValidation, setTippy } from './components/main/_rqst-section.js';
// header
setHeaderBloksMoving()
initChoices()
addClassToSearch()
setBurgerMenu()
setMenuHeight()

//hero
heroSwiperInit()

//offers

offersSwiperInit()

//top-positions

showMoreCards()
// banner move btn

new MoveBlock({
  singleBlock: '.js-banner-btn',
  breakpoints: [
    {
      solution: "(min-width: 601px)",
      target: document.querySelector('.banner__container'),
      method: 'append'
    },
    {
      solution: "(max-width: 600px)",
      target: document.querySelector('.banner-btn-mob-wrap'),
      method: 'append'
    },
  ]
})


//top-categories set focus

let prev = document.querySelector('.js-banner-btn');
new SetFocus('.js-top-categories', {
  focusedPost: '.js-article-swiper-btn:not(.swiper-button-disabled',
  focusedPrev: prev,
})
//articles-prev

articlesSwiperInit()

//request-section

formValidation()
setTippy()