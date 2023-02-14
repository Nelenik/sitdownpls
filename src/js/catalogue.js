// header
import {initChoices, addClassToSearch} from './components/_header.js';
initChoices()
addClassToSearch()

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