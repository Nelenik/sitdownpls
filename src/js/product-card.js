// header
import {initChoices, addClassToSearch, setBurgerMenu, setHeaderBloksMoving} from './components/_header.js';
initChoices()
addClassToSearch()
setHeaderBloksMoving()
setBurgerMenu()

//product swiper
import { productSwiperInit} from './components/product-card/card-descr.js';
productSwiperInit();


//similar swiper
import {similarsSwiperInit} from './components/product-card/similar-goods.js';
similarsSwiperInit()

//buy form
import {setBuyForm, setBuyFormValidation} from './components/modals/_buy-form.js';
setBuyForm();
setBuyFormValidation();

//zoom product
import { setZoom } from './components/modals/_product-zoom.js';
setZoom()
