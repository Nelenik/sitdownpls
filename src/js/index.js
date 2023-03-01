// header
import { initChoices, addClassToSearch, setHeaderBloksMoving, setBurgerMenu, setMenuHeight} from './components/_header.js';
initChoices()
addClassToSearch()
setHeaderBloksMoving()
setBurgerMenu()
setMenuHeight()

//hero
import { heroSwiperInit } from './components/main/_hero.js';
heroSwiperInit()

//offers
import { offersSwiperInit } from './components/main/_offers.js';
offersSwiperInit()

//top-positions
import { showMoreCards } from './components/main/_top-positions.js';

// banner move btn
import { MoveBlock } from './components/vendor/move-block/move-block.js';
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

showMoreCards()
//top-categories set focus
import { SetFocus } from './components/vendor/set-focus.js';
let prev = document.querySelector('.js-banner-btn');
new SetFocus('.js-top-categories', {
  focusedPost: '.js-article-swiper-btn:not(.swiper-button-disabled',
  focusedPrev: prev,
})
//articles-prev
import { articlesSwiperInit } from './components/main/_articles-prev.js';
articlesSwiperInit()

//request-section
import { formValidation, setTippy } from './components/main/_rqst-section.js';
formValidation()
setTippy()