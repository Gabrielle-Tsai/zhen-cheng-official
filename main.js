import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiperPortfolio = new Swiper(".portfolio-swiper", {
  slidesPerView: 1,
  spaceBetween: 36,

  breakpoints: {
    768: {
      slidesPerView: 2,
      speed: 400,
      spaceBetween: 100,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});

const swiperClient = new Swiper(".client-swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 64,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 64,
      navigation: {
        enabled: false,
      },
    },
  },
  grid: {
    fill: "columns",
    rows: 1,
  },
});