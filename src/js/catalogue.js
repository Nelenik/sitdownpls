// header
import {initChoices, addClassToSearch, setBurgerMenu, setHeaderBloksMoving, setMenuHeight} from './components/_header.js';
initChoices()
addClassToSearch()
setHeaderBloksMoving()
setBurgerMenu()
setMenuHeight()

//filter

import { setPriceSlider, setFilterDropdowns } from './components/catalogue/_filter.js';

setPriceSlider()
setFilterDropdowns()

//pagination

import {setProductPages} from './components/catalogue/_page-pagin.js'

setProductPages([
  {
    solution: '(min-width: 921px)',
    step: 9,
  },
  {
    solution: '(max-width: 920px)',
    step: 6
  }
])