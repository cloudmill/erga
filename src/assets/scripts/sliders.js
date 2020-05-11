import Swiper from 'swiper';
const { detect } = require('detect-browser');

const browser = detect();
console.log(browser.name);
export const swiper = new Swiper('.swiper-container', {
  effect: browser.name === 'safari' ? 'slide' : 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  // mousewheel: true,
  // autoplay: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  on: {
    slideChangeTransitionStart: function () {
      $('.swiper-title').removeClass('active');
      $('.swiper-title').addClass('remove');
      const getTitle = $('.swiper-container .swiper-slide-active').data('title');
      const getHref = $('.swiper-container .swiper-slide-active').data('href');
      const setTitle = '<div class="revealOut"><span class="revealIn">'+getTitle[0]+'</span></div>';
      const setTitle2 = getTitle[1] ? '<div class="revealOut"><span class="revealIn">'+getTitle[1]+'</span></div>' : '';

      setTimeout(() => {
        $('.swiper-title').removeClass('remove');
        $('.swiper-title h2').html(setTitle + setTitle2);
        $('.swiper-title').addClass('active');
        $('.sliderLink').find('a').attr('href', getHref);
      }, 500);
    },
  },
});

export const publications = new Swiper('.publ-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 1,
    }
  }
});

export const carousel = new Swiper('.swiper-carousel', {
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination--js',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-btnSN-next',
    prevEl: '.swiper-btnSN-prev',
  },
});
export const carousel1 = new Swiper('.swiper-carousel1', {
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination1--js',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-btnS1-next',
    prevEl: '.swiper-btnS1-prev',
  },
});


export const tradeCarousel = new Swiper('.trademark-carousel--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS-next',
    prevEl: '.swiper-btnS-prev',
  },
});
export const tradeCarousel1 = new Swiper('.trademark-carousel1--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS1-next',
    prevEl: '.swiper-btnS1-prev',
  },
});
export const tradeCarousel2 = new Swiper('.trademark-carousel2--js', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-btnS2-next',
    prevEl: '.swiper-btnS2-prev',
  },
});
export const tradeCarousel3 = new Swiper('.trademark-carousel3--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS3-next',
    prevEl: '.swiper-btnS3-prev',
  },
});
export const tradeCarousel4 = new Swiper('.trademark-carousel4--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS4-next',
    prevEl: '.swiper-btnS4-prev',
  },
});
export const tradeCarousel5 = new Swiper('.trademark-carousel5--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS5-next',
    prevEl: '.swiper-btnS5-prev',
  },
});
export const tradeCarousel6 = new Swiper('.trademark-carousel6--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS6-next',
    prevEl: '.swiper-btnS6-prev',
  },
});
export const tradeCarousel7 = new Swiper('.trademark-carousel7--js', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-btnS7-next',
    prevEl: '.swiper-btnS7-prev',
  },
});

export const menu = new Swiper('.menu-carousel', {
  loop: true,
  // spaceBetween: 10,
  // centeredSlides: true,
  slidesPerView: 'auto',
  mousewheel: true,
  grabCursor: true,
  freeMode: true,
  freeModeMomentumBounce: false,
  freeModeMomentumRatio: .1,
  freeModeMomentumVelocityRatio: .8,
  freeModeSticky: true,
});

$('.menu-carousel.swiper-container').hover(
  function() {
    $('.status').html('mouseenter');
    moveForward();
  }, function() {
    $('.status').html('mouseleave');
    stopWhereYouAre();
  }
);

let oldx = 0;
let offset = [0,0];
let isDown = false;
const divOverlay = document.getElementById("dragger-js");
divOverlay.addEventListener('mousedown', function(e) {
  isDown = true;
  offset = [
    divOverlay.offsetLeft - e.clientX,
  ];
}, true);
divOverlay.addEventListener('mouseup', function() {
  isDown = false;
  stopWhereYouAre();
}, true);
divOverlay.addEventListener('mousemove', function(event) {
  event.preventDefault();
  if (isDown) {
    if (event.pageX > oldx) {
      // menu.slideNext();
      moveForward();
    } else if (event.pageX < oldx) {
      // menu.slidePrev();
      moveBack();
    }
    divOverlay.style.left = ((event.clientX + offset[0])) + 'px';
    divOverlay.style.right = 'auto';
    divOverlay.style.margin = '0';
    oldx = event.pageX;
  }
}, true);

let slideWidth = $('.menu-carousel .swiper-slide').outerWidth(),
  totalSlides = $('.menu-carousel .swiper-slide').length - 1,
  totalWidth = slideWidth * totalSlides,
  desiredSpeed = 50000,
  leftSpeed = desiredSpeed + ( $('.menu-carousel .swiper-wrapper').position().left/slideWidth * 1000);

function moveForward() {
  leftSpeed = desiredSpeed + ( $('.menu-carousel .swiper-wrapper').position().left/slideWidth * 1000);
  $('.menu-carousel .swiper-wrapper').stop().animate({
    left: -totalWidth
  }, leftSpeed, 'linear', function(){
    resetStart();
  });
}
function moveBack() {
  leftSpeed = desiredSpeed + ( $('.menu-carousel .swiper-wrapper').position().left/slideWidth * 1000);
  $('.menu-carousel .swiper-wrapper').stop().animate({
    left: totalWidth
  }, leftSpeed, 'linear', function(){
    resetStart();
  });
}
function stopWhereYouAre(){
  $('.menu-carousel .swiper-wrapper').stop().animate();
}
function resetStart(){
  $('.menu-carousel .swiper-wrapper').stop().animate({
    left: 0
  }, 1000, 'linear', function(){
    moveForward();
  });

}


export const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  on: {
    slideChange: function () {
      $('.gallery-thumbs__item').removeClass('active');
      $('.gallery-thumbs__item[data-slide='+this.activeIndex+']').addClass('active');
    },
  },
});

export const galleryThumbs =
  $('.gallery-thumbs__item').click(function () {
    const gotoSlide = $(this).data('slide');
    galleryTop.slideTo(gotoSlide);
  });
