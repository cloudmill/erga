/* src/app.js */

// Styles
import '../src/assets/styles/_app.scss';
import { fullpage_init } from  '../src/assets/scripts/fullpage';
import { menu, swiper, carousel, carousel1, publications, galleryTop, galleryThumbs, tradeCarousel, tradeCarousel1, tradeCarousel2 } from  '../src/assets/scripts/sliders';

require('../src/assets/scripts/tween');
require('../src/assets/scripts/input');
require('../src/assets/scripts/maps');

import AOS from "aos";
import Rellax from "rellax";

$(document).ready(() => {
  screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  require('../src/assets/scripts/header');
  require('../src/assets/scripts/index');
  require('../src/assets/scripts/history');

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
      require('../src/assets/scripts/particle');
      require('../src/assets/scripts/sticky');

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

