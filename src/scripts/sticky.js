import StickySidebar from 'sticky-sidebar';
import AOS from "aos";
import 'jquery.steps';
import {
  carousel, carousel1, tradeCarousel1, tradeCarousel, tradeCarousel2, tradeCarousel3,
  tradeCarousel4, tradeCarousel5, tradeCarousel6, tradeCarousel7
} from  'scripts/sliders';
import 'inputmask/dist/jquery.inputmask.min';

let card, catalog, tabs, news, sert, screen_width;

$(window).on('resize orientationchange', function(){
  screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(screen_width > 767) {
    if($('.card-top__left').length) {
      card = new StickySidebar('.card-top__left', {
        containerSelector: '.card-top',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 100,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
      });
    }
    if($('.catalog-main__left').length) {
      catalog = new StickySidebar('.catalog-main__left', {
        containerSelector: '.catalog-main-row-first',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 170,
        bottomSpacing: 1,
        resizeSensor: true,
        stickyClass: 'is-affixed',
      });
    }
    if($('.card-tabs__left').length) {
      tabs = new StickySidebar('.card-tabs__left', {
        containerSelector: '.card-tabs',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 100,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
      });
    }
    if($('.socialNews').length) {
      news = new StickySidebar('.socialNews', {
        containerSelector: '.newsOne-content',
        innerWrapperSelector: '.mainNews-index',
        topSpacing: 100,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
      });
    }
    if($('.sertificates-menu').length) {
      sert = new StickySidebar('.sertificates-menu', {
        containerSelector: '.sertificates-content',
        innerWrapperSelector: '.sertificates-left',
        topSpacing: 100,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
      });
    }
    if($('.sticky-elem').length) {
      sert = new StickySidebar('.sticky-elem', {
        containerSelector: '.sticky-content',
        innerWrapperSelector: '.sticky-left',
        topSpacing: 100,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
      });
    }
  }
});

screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(screen_width > 767) {
  if($('.card-top__left').length) {
    card = new StickySidebar('.card-top__left', {
      containerSelector: '.card-top',
      innerWrapperSelector: '.sidebar__inner',
      topSpacing: 100,
      bottomSpacing: 0,
      resizeSensor: true,
      stickyClass: 'is-affixed',
    });
  }
  if($('.catalog-main__left').length) {
    catalog = new StickySidebar('.catalog-main__left', {
      containerSelector: '.catalog-main-row-first',
      innerWrapperSelector: '.sidebar__inner',
      topSpacing: 170,
      bottomSpacing: 1,
      resizeSensor: true,
      stickyClass: 'is-affixed',
    });
  }
  if($('.card-tabs__left').length) {
    tabs = new StickySidebar('.card-tabs__left', {
      containerSelector: '.card-tabs',
      innerWrapperSelector: '.sidebar__inner',
      topSpacing: 100,
      bottomSpacing: 0,
      resizeSensor: true,
      stickyClass: 'is-affixed',
    });
  }
  if($('.socialNews').length) {
    news = new StickySidebar('.socialNews', {
      containerSelector: '.newsOne-content',
      innerWrapperSelector: '.mainNews-index',
      topSpacing: 100,
      bottomSpacing: 0,
      resizeSensor: true,
      stickyClass: 'is-affixed',
    });
  }
  if($('.sertificates-menu').length) {
    sert = new StickySidebar('.sertificates-menu', {
      containerSelector: '.sertificates-content',
      innerWrapperSelector: '.sertificates-left',
      topSpacing: 100,
      bottomSpacing: 0,
      resizeSensor: true,
      stickyClass: 'is-affixed',
    });
  }
  if($('.sticky-elem').length) {
    sert = new StickySidebar('.sticky-elem', {
      containerSelector: '.sticky-content',
      innerWrapperSelector: '.sticky-left',
      topSpacing: 120,
      bottomSpacing: 0,
      resizeSensor: true,
      stickyClass: 'is-affixed',
    });
  }
}

$(document).mousemove(function(e) {
  screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(screen_width > 1200) {
    const elements = $('.publications-item-js');
    elements.each((index, item) => {
      const jItem = $(item);
      const elemX = e.pageX - jItem.offset().left;
      const elemY = e.pageY - jItem.offset().top;
      jItem.find('.publications-link').css({
        left: elemX - 80,
        top: elemY - 80
      });
    })
  }
});


// tabs
$(".tabs-list").on("click", ".tab", function(e) {
  e.preventDefault();
  const href = $(this).attr("data-target");

  $(this)
    .closest(".tabs")
    .find(".tabs-list .tab")
    .removeClass("active");
  $(this)
    .closest(".tabs")
    .find(".tabs-content")
    .removeClass("show");
  $(this).addClass("active");
  $(href).addClass("show");

  if(tabs) {
    tabs.updateSticky();
  }

  AOS.init({offset: -80});
  $('.swiper-carousel').length && carousel.update();
  $('.swiper-carousel1').length && carousel1.update();
  $('.trademark-carousel--js').length && tradeCarousel.update();
  $('.trademark-carousel1--js').length && tradeCarousel1.update();
  $('.trademark-carousel2--js').length && tradeCarousel2.update();
  $('.trademark-carousel3--js').length && tradeCarousel3.update();
  $('.trademark-carousel4--js').length && tradeCarousel4.update();
  $('.trademark-carousel5--js').length && tradeCarousel5.update();
  $('.trademark-carousel6--js').length && tradeCarousel6.update();
  $('.trademark-carousel7--js').length && tradeCarousel7.update();
});


const form = $(".steps-form");
const formValid = $(".steps-form-valid");
form.children("div").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  enablePagination: false,
  enableAllSteps: true,
  titleTemplate: '#title#',
  onStepChanged: function () {
    if(tabs) {
      tabs.updateSticky();
    }
    AOS.refresh({offset: -80});
  },
});
formValid.children("div").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  enablePagination: false,
  enableAllSteps: false,
  titleTemplate: '#title#',
  onStepChanged: function () {
    if(tabs) {
      tabs.updateSticky();
    }
    AOS.refresh({offset: -80});
  },
});

function validateFields(element, func, isFinish) {
  const input = element.closest('section').find('.required');
  const isNum = element.closest('section').find('.isNumber').find('input');
  const checked = $("input[type=checkbox][name]:checked").length;

  input.each((index, item) => {
    const jItem = $(item);
    if(jItem.prop('type') === 'checkbox') {
      if(checked) {
        jItem.parent().removeClass('error');
      } else {
        if(jItem.prop('checked')) {
          jItem.parent().removeClass('error');
        } else {
          jItem.parent().addClass('error');
        }
      }
    } else {
      if(!jItem.val()) {
        jItem.parent().addClass('error');
        jItem.parent().find('.input-error').text('Пожалуйста, заполните поле');
      } else {
        jItem.parent().removeClass('error');
      }
    }
    isNum.each((index, item) => {
      const jItem = $(item);
      if(!!jItem.val()) {
        if (!isNaN(jItem.val())) {
          jItem.parent().removeClass('error');
        } else {
          jItem.parent().addClass('error');
          jItem.parent().next().text('Укажите числовое значение');
        }
      }
    })
  })
  const nonValidFields = element.closest('section').find('div.error');
  if(nonValidFields.length === 0) {
    form.length && form.children("div").steps(func, {})
    formValid.length && formValid.children("div").steps(func, {})
    if(isFinish) {
      $('.finishContent').addClass('active').parents('form').submit();
    }
    if(form.length) {
      $('html, body').animate({
        scrollTop: $(".steps-form").offset().top - 100
      }, 500);
    }
    if(formValid.length) {
      $('html, body').animate({
        scrollTop: $(".steps-form-valid").offset().top - 100
      }, 500);
    }
  }
  if(nonValidFields.length) {
    if(form.length) {
      $('html, body').animate({
        scrollTop: $(".steps-form div.error").offset().top - 100
      }, 500);
    }
    if(formValid.length) {
      $('html, body').animate({
        scrollTop: $(".steps-form-valid div.error").offset().top - 100
      }, 500);
    }
  }
}

$('.stepper-next button').click(function () {
  validateFields($(this), "next", false);
  return false;
});
$('.stepper-submit button').click(function () {
  validateFields($(this), "finish", true);
  return false;
});


// mask phone {maskedinput}
$("[name=phone]").inputmask({
  mask: "+7 (999) 999-9999",
  showMaskOnHover: false,
});
