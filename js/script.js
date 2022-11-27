var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  centerSlide: "true",
  cssMode: "True",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
