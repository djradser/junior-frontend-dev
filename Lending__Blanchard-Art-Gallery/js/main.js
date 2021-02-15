document.addEventListener('DOMContentLoaded', function () {
  // Бургер меню
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.enter-image-link').classList.toggle('active');
    document.querySelector('.logo').classList.toggle('active-burger');
  });
  // Мобильный поиск
  document.querySelector('.header__search-mobile-button').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.logo').classList.toggle('active-search');
    document.querySelector('.header__search-mobile').classList.toggle('active');
    document.querySelector('.header__search-mobile-input').classList.toggle('active');
    document.querySelector('.header__search-mobile-button').classList.toggle('active');
    document.querySelector('.search__cross').classList.toggle('active');
    document.querySelector('.first-menu-bkg').classList.toggle('active');
    document.querySelector('.header__burger').classList.toggle('hidden');
  });
  // Закрытие мобильного поиска по клику на крестик
  document.querySelector('.search__cross').addEventListener('click', function () {
    document.querySelector('.header__search-mobile').classList.remove('active');
    document.querySelector('.header__search-mobile-input').classList.remove('active');
    document.querySelector('.header__search-mobile-button').classList.remove('active');
    document.querySelector('.search__cross').classList.remove('active');
    document.querySelector('.logo').classList.remove('active-search');
    document.querySelector('.first-menu-bkg').classList.toggle('active');
    document.querySelector('.header__burger').classList.toggle('hidden');
  });
  // Плавная прокрутка якорных ссылок
  const anchors = document.querySelectorAll('a.header__nav-link, a.section-hero__btn')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  // Gallery-select
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false
  });

});

// Swiper-initializing
new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  simulateTouch: true,
  touchRation: 1,
  touchAngle: 45,
  grabCursor: false,
  slideToClickedSlide: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: false,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 50,
  slidesPerGroup: 3,
  centeredSlides: false,
  initialSlide: 0,
  slidesPerColumn: 2,
  speed: 800,
  effect: 'slide',
  breakpoints: {
    320: {
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1891: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage:'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
    notificationClass: 'swiper-notification',
    containerMessage: '',
    containerRoleDescriptionMessage: '',
    itemRoleDescriptionMessage: '',
  },
});