import { cataloguePage } from "../_variables";

import noUiSlider from 'nouislider'

// слайдер диапазон цен
export function setPriceSlider () {
  const {rangeBar, rangeMin, rangeMax} = cataloguePage;
  const inputs = [rangeMin, rangeMax]

  noUiSlider.create(rangeBar, {
    start: [2000, 150000],
    connect: true,
    range: {
        'min': 0,
        'max': 250000
    }
});

rangeBar.noUiSlider.on('update', function(values, handle) {
  inputs[handle].value = Math.round(values[handle])
})

rangeMin.addEventListener('change', function() {
  rangeBar.noUiSlider.set([this.value, null])
})

rangeMax.addEventListener('change', function() {
  rangeBar.noUiSlider.set([null, this.value])
})
}
// дропдауны на фильтрах
function setDropAria(el) {
  let ariaExpState = 'true' === el.getAttribute('aria-expanded');
  el.setAttribute('aria-expanded', !ariaExpState);
  ariaExpState ? el.setAttribute('aria-label', `Открыть фильтр`) : el.setAttribute('aria-label', `Закрыть фильтр`)
}

function resetDropAria(el) {
  el.ariaExpanded = false;
  el.setAttribute('aria-label', `Открыть фильтр`)
}
export function setFilterDropdowns() {
  const {filterBtns} = cataloguePage;
  function manageDropdown(openBtn) {
    const dropList = document.querySelector(`[data-target="${openBtn.dataset.path}"]`)
  
    openBtn.addEventListener('click', function (e) {
      dropList.classList.toggle('js-filter-group--active');
      this.classList.toggle('js-filter-btn--active');
      setDropAria(this)
    })
  
    dropList.addEventListener('click', function setFlag(e) {
      e._isClickedDropList = true;
    })
  
    document.addEventListener('click', function closeDrop(e) {
      if (e.target===openBtn || e._isClickedDropList) return
      dropList.classList.remove('js-filter-group--active');
      openBtn.classList.remove('js-filter-btn--active');
      resetDropAria(openBtn)
    })
  }
  filterBtns.forEach(btn => {
    manageDropdown(btn)
  })
}