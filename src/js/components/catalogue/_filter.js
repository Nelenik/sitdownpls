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