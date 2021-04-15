/* src/app.js */

// Styles
import "../src/assets/styles/_app.scss";
import { fullpage_init } from "../src/assets/scripts/fullpage";

require("../src/assets/scripts/tween");
require("../src/assets/scripts/input");
require("../src/assets/scripts/maps");
const { detect } = require("detect-browser");

import AOS from "aos";
import Rellax from "rellax";
import './assets/scripts/landing-tabs.js';
import Swiper from "swiper";

$(document).ready(() => {
  const noop = () => { };
  window.stopParticle = noop;
  window.startParticle = noop;
  const browser = detect();
  console.log(browser);
  $("html").addClass(browser.name);

  screen_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  require("../src/assets/scripts/header");
  require("../src/assets/scripts/index");
  require("../src/assets/scripts/history");
  require("../src/assets/scripts/video");

  if (screen_width > 767 && $("#fullpage").length) {
    fullpage_init();
  } else {
    const el = $("#fullpage .section.section__main");
    var played = true;
    document.addEventListener("scroll", () => {
      if (el.length > 0) {
        const top = el.height() + el.offset().top;
        var show = false;
        if ($(document).scrollTop() > top) {
          show = false;
        } else {
          show = true;
        }
        if (show) {
          if (startParticle && !played) {
            startParticle();
            played = true;
          }
        } else {
          if (stopParticle && played) {
            stopParticle();
            played = false;
          }
        }
      }
    });
  }
});

let screen_width;

// mobile sctipts
$(window).on("resize orientationchange", function () {
  screen_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (screen_width < 768) {
    $("#fullpage").length && fullpage_api.destroy("all");
  }
});
// mobile sctipts

window.addEventListener(
  "resize",
  function () {
    AOS.refresh({ offset: -80 });
  },
  false
);

function complateLoading() {
  $(".loader").addClass("hidden");
  require("../src/assets/scripts/particle");
  require("../src/assets/scripts/sticky");

  AOS.init({
    offset: -80,
    // disable: function () {
    //   var maxWidth = 600;
    //   return window.innerWidth < maxWidth;
    // },
  });
  if (screen_width > 767 && $(".rellax").length) {
    const rellax = new Rellax(".rellax", {
      speed: 2,
      center: true,
      wrapper: ".scrollable-content",
      vertical: true,
      horizontal: false,
    });
  }
}
if ($(".loader-outer").length > 0) {
  $(window).on("load", function () {
    screen_width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    window.scrollTo(0, 0);

    setTimeout(() => {
      $(".loader-outer").addClass("active");

      setTimeout(function () {
        complateLoading();
      }, 1000);
      window.scrollTo(0, 0);
    }, 500);
  });
} else {
  complateLoading();
  $(window).on("load", function () {
    screen_width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  });
}

const HEADER_BREAKPOINT = 993;
function getOffset() {
  if ($(window).width() >= HEADER_BREAKPOINT) {
    return 148;
  }
  return 88;
}

// header plain
$(window).on('load', () => {
  if ($('.header-plain').length !== 0) {
    const intervalTime = 1000 / 30;
    const startYOffset = window.pageYOffset;

    if (startYOffset > 0) {
      $('.header-plain').addClass('header-plain--scroll');
    }

    $(window).on('scroll.header-plain', scrollHandler);

    $('.header-plain__button').on('click', function (event) {
      event.preventDefault();

      const header = $('.header-plain');

      if (header.hasClass('header-plain--open')) {
        header.removeClass('header-plain--open');
      } else {
        header.addClass('header-plain--open');
      }
    });

    $('.header-plain').on('click', event => {
      if (event.target === event.currentTarget) {
        $('.header-plain').removeClass('header-plain--open');
      }
    });

    const scrollUp = $('.scroll-up');
    const scrollUpExist = scrollUp.length !== 0;

    function scrollHandler() {
      $(window).off('scroll.header-plain');
      const timeout = setTimeout(() => {
        const currentYOffset = window.pageYOffset;

        if (currentYOffset > 0) {
          $('.header-plain').addClass('header-plain--scroll');
        } else {
          $('.header-plain').removeClass('header-plain--scroll');
        }

        if (scrollUpExist) {
          if (Math.floor(currentYOffset) < Math.floor($('#about').offset().top - getOffset())) {
            scrollUp.addClass('scroll-up--hide');
          } else {
            scrollUp.removeClass('scroll-up--hide');
          }
        }

        clearTimeout(timeout);
        $(window).on('scroll.header-plain', scrollHandler);
      }, intervalTime);
    }

    $('.header-plain nav [href^="#"], .landing__industries-list [href="#select"]').on('click', function () {
      const timeout = setTimeout(() => {
        $(window).scrollTop($($(this).attr('href')).offset().top - getOffset());

        AOS.refresh({ offset: -80 });

        $('.header-plain').removeClass('header-plain--open');

        clearTimeout(timeout);
      }, 0);
    });

    if (scrollUpExist) {
      scrollUp.on('click', () => $('.header-plain').removeClass('header-plain--open'));
    }
  }
});

// landing sert
$(window).on('load', () => {
  if ($('.landing__sert-section').length !== 0) {
    const SLIDER_SPEED = 500;

    const thumbs = new Swiper('.landing__sert-section .landing__sert-subslider-swiper', {
      allowTouchMove: false,
      speed: 0,
    });

    const slider = new Swiper('.landing__sert-section .landing__sert-slider-swiper', {
      speed: SLIDER_SPEED,

      on: {
        slideChange: function () {
          thumbs.slideTo(this.activeIndex);
        },
      },
      
      pagination: {
        el: '.landing__sert-section .swiper-pagination--js',
        type: 'fraction',
      },
      
      navigation: {
        nextEl: '.landing__sert-section .swiper-btnSN-next',
        prevEl: '.landing__sert-section .swiper-btnSN-prev',
      },
    });
    
    if (String(slider.slides.length).length > 1) {
      $('.landing__sert-section .swiper-pagination-total').addClass('swiper-pagination-total--short');

      slider.on('slideChange', () => {
        if ($('.landing__sert-section .swiper-pagination-current').text().length > 1) {
          $('.landing__sert-section .swiper-pagination-current').addClass('swiper-pagination-current--short');
        } else {
          $('.landing__sert-section .swiper-pagination-current').removeClass('swiper-pagination-current--short');
        }
      });
    }
  }
});

// landing gallery
$(window).on('load', () => {
  if ($('.landing__gallery-section').length !== 0) {
    const slider = new Swiper('.landing__gallery-swiper', {
      spaceBetween: 20,

      pagination: {
        el: '.landing__gallery-section .swiper-pagination--js',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.landing__gallery-section .swiper-btn-next',
        prevEl: '.landing__gallery-section .swiper-btn-prev',
      },
    });

    if (String(slider.slides.length).length > 1) {
      $('.landing__gallery-section .swiper-pagination-total').addClass('swiper-pagination-total--short');

      slider.on('slideChange', () => {
        if ($('.landing__gallery-section .swiper-pagination-current').text().length > 1) {
          $('.landing__gallery-section .swiper-pagination-current').addClass('swiper-pagination-current--short');
        } else {
          $('.landing__gallery-section .swiper-pagination-current').removeClass('swiper-pagination-current--short');
        }
      });
    }
  }
});

// scroll-up
$(() => {
  if ($('.scroll-up').length !== 0) {
    if (Math.floor(window.pageYOffset) < Math.floor($('#about').offset().top - getOffset())) {
      $('.scroll-up').addClass('scroll-up--hide');
    }

    $('.scroll-up').on('click', () => $('html').animate({ scrollTop: 0 }, 500));
  }
});