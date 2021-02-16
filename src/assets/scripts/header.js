import { closeContainer } from './demo';
// import { fullpage_init } from  'scripts/fullpage';


const screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let requestRunning = false;
$(".menu--js").click(function(event) {
  event.preventDefault();
  if (requestRunning) {
    return;
  }

  if($(this).hasClass('open')) {
    closeMenu();
    $('.menuBar').removeClass("open");
    $('.menu--js').removeClass("open");
  } else {
    openMenu();
    $('.menuBar').addClass("open");
    $('.menu--js').addClass("open");
  }

  setTimeout(() => {
    // $(".menuBar").toggleClass("active");
    // $('header').toggleClass("open");
    // $('.menu--js').toggleClass("open");
    $("body").toggleClass('fixed');
  }, 0);

  if($('#fullpage').length) {
    if($(this).hasClass('open')) {
      fullpage_api.setMouseWheelScrolling(true);
      fullpage_api.setAllowScrolling(true);
    } else {
      fullpage_api.setMouseWheelScrolling(false);
      fullpage_api.setAllowScrolling(false);
    }
  }
  requestRunning = true;

  setTimeout(() => {requestRunning = false}, 1500);
});

// search
$(".search--js").click(function() {
  $(".searchBar").addClass("active");

  return false;
});
$(".searchBar__close").click(function() {
  $(".searchBar").removeClass("active");

  return false;
});

if(screen_width < 768) {
  $(
    ".mobileMenu--js h3 > a, " +
    ".mobileMenu--js .dropdown-menu__item--parent > a, " +
    ".mobileMenu--js .dropdownDeep__item--parent > a"
  ).click(function () {
    $(this).parent().toggleClass("active");
    $(this).next().slideToggle();

    return false;
  });
}
// search

$(document).mouseup(function (e) {
  closeContainer(".searchBar.active", e);
});

// Hide Header on on scroll down



$(function(){
  let lastScrollTop = 0, delta = 5;
  // $(this.body).css({
  //   'overflow': 'scroll',
  //   'height': 'auto',
  // });
  const offset = $(".filter--js").offset();
  $(window).scroll(function(){
    const st = $(this).scrollTop();

    console.log('sdfa');

    if(offset) {
      if (st > offset.top) {
        $('.filter--js').addClass('fixed');
      } else {
        $('.filter--js').removeClass('fixed');
      }
    }
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // if (st > lastScrollTop && lastScrollTop > 0){
    //   $("header").addClass('nav-up');
    //   $('.filter--js').addClass('nav-up');
    //   $('.menu--js').addClass('thin');
    // } else {
    //   $("header").removeClass('nav-up');
    //   $('.filter--js').removeClass('nav-up');
    //   $('.menu--js').removeClass('thin');
    // }
    if(screen_width > 767) {
      if (st > 1) {
        $("header").addClass('scroll').parent().addClass('scroller');
      } else {
        $("header").removeClass('scroll').parent().removeClass('scroller');
      }
    }
    lastScrollTop = st;
  });
});


// header__menu-el--parent
$(".main-nav__item--parent").mouseleave(function() {
  $(this).parents().find('.page-header').removeClass('hover');
});
$(".main-nav__item--parent").mouseover(function() {
  $(this).parents().find('.page-header').addClass('hover');
});
$(".dropdown-menu__item").mouseover(function() {
  const getImg = $(this).data('img');
  $(this).closest('.dropdown').css('background', `url("${getImg}") no-repeat right bottom 30px, #F6F6F6`);
});
$(".dropdown-menu__item--js").mouseover(function() {
  $('.liners span:nth-child(2)').css('opacity', 1);
});
$(".dropdown-menu__item1--js").mouseover(function() {
  $('.liners span:nth-child(3)').css('opacity', 1);
});
$(".dropdown-menu__item--js").mouseleave(function() {
  $('.liners span:nth-child(2)').css('opacity', 0);
});
$(".dropdown-menu__item1--js").mouseleave(function() {
  $('.liners span:nth-child(3)').css('opacity', 0);
});
const $nav = $(".menuBar"),
  $hamburguer = $(".menu--js"),
  $background = $(".menuBar .background");

function openMenu() {
  TweenMax.set($nav, {
    autoAlpha: 1
  });
  TweenMax.to($background, 1, {
    scaleY: 1,
    ease: Power4.easeInOut
  });
  TweenMax.to('.menuBar-header', 1, {
    transform: 'translateY(0)',
    delay: 0.4,
    ease: Power4.easeInOut
  });
  TweenMax.to('.menuBar-top', 1, {
    opacity: 1,
    delay: 0.6,
    ease: Power4.easeInOut
  });
  TweenMax.to('.menuBar-bottom', 1, {
    transform: 'translateY(0)',
    delay: 0.7,
    ease: Power4.easeInOut
  });
}

function closeMenu() {
  TweenMax.to('.menuBar-top', 1, {
    opacity: 0,
    ease: Power4.easeInOut
  });
  TweenMax.to('.menuBar-bottom', 1, {
    transform: 'translateY(600px)',
    ease: Power4.easeInOut
  });
  TweenMax.to('.menuBar-header', 1, {
    transform: 'translateY(-600px)',
    delay: 0.2,
    ease: Power4.easeInOut
  });
  TweenMax.to($background, 0.6, {
    scaleY: 0,
    delay: 0.8,
    ease: Power4.easeInOut,
  });
  TweenMax.to($hamburguer.find("div"), 0, {
    delay: 1.5,
    onComplete: function () {
      TweenMax.set($nav, {
        autoAlpha: 0
      });
    }
  })
}
