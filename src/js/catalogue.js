import {initChoices, addClassToSearch, setBurgerMenu, setHeaderBloksMoving} from './components/_header.js';
import { setPriceSlider, setFilterDropdowns } from './components/catalogue/_filter.js';
import {setProductPages} from './components/catalogue/_page-pagin.js'
// // header
initChoices()
addClassToSearch()
setHeaderBloksMoving()
setBurgerMenu()

//filter
setPriceSlider()
setFilterDropdowns()

//pagination
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