import { cataloguePage } from "../_variables";

import noUiSlider from 'nouislider'

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

export function setFilterDropdowns() {
  const {filterBtns} = cataloguePage;
  function manageDropdown(openBtn) {
    const dropList = document.querySelector(`[data-target="${openBtn.dataset.path}"]`)
  
    openBtn.addEventListener('click', function (e) {
      dropList.classList.toggle('js-filter-group--active');
      this.classList.toggle('js-filter-btn--active')
    })
  
    dropList.addEventListener('click', function setFlag(e) {
      e._isClickedDropList = true;
    })
  
    document.addEventListener('click', function closeDrop(e) {
      if (e.target===openBtn || e._isClickedDropList) return
      dropList.classList.remove('js-filter-group--active');
      openBtn.classList.remove('js-filter-btn--active');
    })
  }
  filterBtns.forEach(btn => {
    manageDropdown(btn)
  })
}