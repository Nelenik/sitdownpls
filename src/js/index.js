// header
import { initChoices, addClassToSearch, setGreyRowSize, setHeaderBloksMoving, setBurgerMenu} from './components/_header.js';
initChoices()
addClassToSearch()
setHeaderBloksMoving()
setBurgerMenu()
setGreyRowSize()

//hero
import { heroSwiperInit } from './components/main/_hero.js';
heroSwiperInit()

//offers
import { offersSwiperInit } from './components/main/_offers.js';
offersSwiperInit()

//top-positions
import { showMoreCards } from './components/main/_top-positions.js';

showMoreCards()

//articles-prev
import { articlesSwiperInit } from './components/main/_articles-prev.js';
articlesSwiperInit()

//request-section
import { formValidation } from './components/main/_rqst-section.js';
formValidation()