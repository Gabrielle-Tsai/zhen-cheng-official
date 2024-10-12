import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiperPortfolio = new Swiper(".portfolio-swiper", {
  speed: 400,
  spaceBetween: 100,
});

const swiperClient = new Swiper(".client-swiper", {
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 64
    },
  },
  grid: {
    fill: "columns",
    rows: 1,
  },
});