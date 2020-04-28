/* src/app.js */

// Styles
import 'styles/_app.scss';
import { fullpage_init } from  'scripts/fullpage';
import { menu, swiper, carousel, carousel1, publications, galleryTop, galleryThumbs, tradeCarousel, tradeCarousel1, tradeCarousel2 } from  'scripts/sliders';

require('scripts/tween');
require('scripts/input');
require('scripts/maps');

import AOS from "aos";
import Rellax from "rellax";

$(document).ready(() => {
  screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  require('scripts/header');
  require('scripts/index');
  require('scripts/history');

  menu;
  swiper;
  carousel;
  carousel1;
  publications;
  galleryTop;
  galleryThumbs;
  tradeCarousel;
  tradeCarousel1;
  tradeCarousel2;
  if(screen_width > 767 && $('#fullpage').length) {
    fullpage_init();
  }
});

let screen_width;

// mobile sctipts
$(window).on('resize orientationchange', function(){
  screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(screen_width < 768) {
    $('#fullpage').length && fullpage_api.destroy('all');
  }
});
// mobile sctipts


window.addEventListener("resize", function() {
  AOS.refresh({offset: -80});
}, false);

$(window).on("load", function() {
  screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  window.scrollTo(0, 0);

  setTimeout(() => {
    $('.loader-outer').addClass('active');

    setTimeout(function() {
      $('.loader').addClass('hidden');
      require('scripts/particle');
      require('scripts/sticky');

      AOS.init({offset: -80});
      if (screen_width > 767 && $('.rellax').length) {
        const rellax = new Rellax('.rellax', {
          speed: 2,
          center: true,
          wrapper:  '.scrollable-content',
          vertical: true,
          horizontal: false
        });
      }

    }, 1000);
    window.scrollTo(0, 0);
  }, 500);
});

