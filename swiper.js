const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper(".swiper-2", {
  loop: true,
  navigation: {
    nextEl: ".custom-next2",
    prevEl: ".custom-prev2",
  },

  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

const swiper3 = new Swiper(".swiper-3", {
  loop: true,
  navigation: {
    nextEl: ".custom-next-3",
    prevEl: ".custom-prev-3",
  },

  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
