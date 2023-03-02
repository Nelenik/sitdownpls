import {initChoices, addClassToSearch, setBurgerMenu, setHeaderBloksMoving, setMenuHeight} from './components/_header.js';
import { productSwiperInit} from './components/product-card/card-descr.js';
import {similarsSwiperInit} from './components/product-card/similar-goods.js';
import {setBuyForm, setBuyFormValidation} from './components/modals/_buy-form.js';
import { setZoom } from './components/modals/_product-zoom.js';
// header
setHeaderBloksMoving()
initChoices()
addClassToSearch()
setBurgerMenu()
setMenuHeight()

//product swiper

productSwiperInit();


//similar swiper

similarsSwiperInit()

//buy form

setBuyForm();
setBuyFormValidation();

//zoom product

setZoom()
