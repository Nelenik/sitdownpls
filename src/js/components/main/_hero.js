import Swiper, {Pagination, A11y, Autoplay } from 'swiper'

export function heroSwiperInit() {

  const heroSwiper = new Swiper('.hero__swiper', {
    modules: [Pagination, A11y, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class=${className}>
        <svg class="progress-bar" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle class="track" cx="50" cy="50" r="45" stroke="#FFFFFF" stroke-width="9.5"/>
        <circle class="progress" cx="50" cy="50" r="45" stroke="#FF862F" stroke-width="10.5"/>
  </svg>
    </span>`
      }
    },
    grabCursor: true,
    spaceBetween: 48,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,

    },
    loop: true,
    a11y: {
      slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    }
  })

  function setDelay() {
    let activeSlide = document.querySelector('.swiper-slide-active');
    let activeBullet = document.querySelector('.swiper-pagination-bullet-active .progress');
    activeBullet.style.setProperty('--swiper-delay', `${activeSlide.dataset.swiperAutoplay / 1000 + 1.5}s`)
  }

  setDelay()

  heroSwiper.on('slideChange', function () {
    setDelay()
  })

}