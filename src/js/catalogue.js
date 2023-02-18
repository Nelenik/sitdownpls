// header
import {initChoices, addClassToSearch, setGreyRowSize} from './components/_header.js';
initChoices()
addClassToSearch()
setGreyRowSize()

//filter

import { setPriceSlider } from './components/catalogue/_filter.js';

setPriceSlider()

//pagination

import {setProductPages} from './components/catalogue/_page-pagin.js'

setProductPages([
  {
    solution: '(min-width: 769px)',
    step: 9,
  },
  {
    solution: '(max-width: 768px)',
    step: 6
  }
])