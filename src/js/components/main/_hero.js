import Swiper from "swiper/bundle";

export function heroSwiperInit() {
  const heroSwiper = new Swiper('.hero__swiper', {
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
      // delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,

    },
    loop: true,
  })

  function setDelay() {
    let activeSlide = document.querySelector('.swiper-slide-active');
    let activeBullet = document.querySelector('.swiper-pagination-bullet-active .progress');
    activeBullet.style.setProperty('--swiper-delay', `${activeSlide.dataset.swiperAutoplay / 1000 + 1}s`)
  }

  setDelay()

  heroSwiper.on('slideChangeTransitionStart', function () {
    setDelay()
  })

}