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
  // Селект в секции "Галерея"
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false
  });

  // Табы в секции "Каталог" для смены стран
  let jsTriggers = document.querySelectorAll('.js-tab-trigger');

  jsTriggers.forEach(function (item, i) {
    item.addEventListener('click', function() {
      let tabName = this.dataset.tab;
          tabContent = document.querySelector('.js-tab-content[data-tab="'+tabName+'"]');

          document.querySelectorAll('.js-tab-content.tab-content-active').forEach(function(item, i) {
            item.classList.remove('tab-content-active');
          });

          document.querySelectorAll('.js-tab-trigger.active').forEach(function(item, i) {
            item.classList.remove('active');
          });
          
          tabContent.classList.add('tab-content-active');
            this.classList.add('active')
    });
  })

  // Табы в секции "Каталог" для аккордеона
  document.querySelectorAll('.accordion-btn').forEach(function(accordionBtn) {
    accordionBtn.addEventListener('click', function (event) {
      // accordionBtn.classList.add('active')
      const track = event.currentTarget.dataset.track

      document.querySelectorAll('.tab-content__left').forEach(function(tabContentLeft) {
        tabContentLeft.classList.remove('tab-content__left-active')
      });

      document.querySelector(`[data-toggle="${track}"]`).classList.add('tab-content__left-active')
    });
  });

  // Переключение активных кнопок в аккордеоне
  const elements = document.querySelectorAll('.accordion-btn');

  function toggleOpen() {
      this.classList.toggle('active-btn');
      elements.forEach(ele => {
          if (ele !== this) ele.classList.remove('active-btn');
      });
  }

  elements.forEach(ele => ele.addEventListener('click', toggleOpen));

  // Аккордеон в секции "Каталог"
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      const currentlyActiveaccordionItemHeader = document.querySelector(".accordion-item-header.active");
      if(currentlyActiveaccordionItemHeader && currentlyActiveaccordionItemHeader!==accordionItemHeader) {
        currentlyActiveaccordionItemHeader.classList.toggle("active");
        currentlyActiveaccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  // Кнопка "Все события"
  document.querySelector('.section-events__btn').addEventListener('click', function () {
    document.querySelector('#event-item-four').style.display = 'block';
    document.querySelector('#event-item-five').style.display = 'block';
    document.querySelector('.section-events__btn').style.display = 'none';
    document.querySelector('.section-events__list-item').style.marginBottom = '20px';
  });

  // Тултипы в проектах
  // document.querySelector('#btn__comment1').addEventListener('click', function () {
  //   document.querySelector('#comment1').classList.toggle('visible');
  // });

  // document.querySelector('#btn__comment2').addEventListener('click', function () {
  //   document.querySelector('#comment2').classList.toggle('visible');
  // });

  // document.querySelector('#btn__comment3').addEventListener('click', function () {
  //   document.querySelector('#comment3').classList.toggle('visible');
  // });

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

  let swiperEditions = new Swiper(".section-editions__slider", {
    slidesPerView: 2,
    // slidesPerGroup: 3,
    spaceBetween: 50,

    breakpoints: {
      1700: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-editions__swiper-button-next",
      prevEl: ".section-editions__swiper-button-prev",
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

  let swiperEditionsPartners = new Swiper(".section-projects__slider", {
    slidesPerView: 2,
    spaceBetween: 50,
    watchSlidesVisibility: true,

    breakpoints: {
      // when window width is >= 320px
      1700: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-projects__swiper-button-next",
      prevEl: ".section-projects__swiper-button-prev",
    },
  });
});
