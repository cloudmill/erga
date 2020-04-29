import ScrollMagic from 'scrollmagic';


(function() {
  let smController;

  (function() {
    window.App = {
      W: $(window),
      D: $(document),
      H: $('html'),
      B: $('body'),
      ie: false,
      edge: false,
      firefox: false,
      mainpage: false
    };

    if (App.H.hasClass('mobile')) {
      App.mobile = true;
    } else {
      App.H.addClass('desktop');
    }

    if (App.H.hasClass('ie')) {
      App.ie = true;
    }

    if (App.H.hasClass('edge')) {
      App.edge = true;
    }

    if (App.H.hasClass('firefox')) {
      App.firefox = true;
    }

    if (App.H.hasClass('android')) {
      App.android = true;
    }

    const debounceResize = debounce(function() {
      App.W.trigger('resized');

    }, 200);

    App.W.on('resize', function() {
      debounceResize();
    });
  })();

  function throttle(callable, wait) {
    let id;

    function call(context, list) {
      requestAnimationFrame(function () {
        callable.apply(context, list);
        id = 0;
      });
    }

    return function () {
      if (id) return;
      id = setTimeout(call, wait, this, arguments);
    };
  }

  function debounce(func, wait, immediate) {
    let timeout;

    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  (function() {
    const $historyItems = $('.js-mp-histoty-item');
    if (!$('.js-mp-history').length) {
      return;
    }
    const $yearItems = $('.js-mp-history-year-item');
    const $yearsInner = $('.js-mp-history-year-inner');
    const $ageItems = $('.js-mp-history-age-item');
    const $ageInner = $('.js-mp-history-age-inner');
    const $timelineItems = $('.js-timeline-item');
    // const $yearContainer = $('.mp-history__fixed-year');
    // const historyBlock = $('.js-mp-history')[0];
    // let historyDuration = $('.js-mp-history').height() + 150;

    smController = new ScrollMagic.Controller();


    // const historyScene = new ScrollMagic.Scene({
    //   triggerElement: historyBlock,
    //   duration: historyDuration
    // })
    //   .on('enter leave update', function(e) {
    //     if (e.type == 'enter') {
    //       App.H.addClass('_history-open');
    //     } else if (e.type == 'leave') {
    //       App.H.removeClass('_history-open');
    //     } else if (e.type == 'update' && !App.mobile) {
    //
    //       // РЎРјРµС‰РµРЅРёРµ С„РёРєСЃРёСЂРѕРІР°РЅРЅРѕРіРѕ РіРѕРґР° (РїР°СЂР°Р»Р»Р°РєСЃ)
    //       // const middle = (e.endPos - e.startPos) / 2;
    //       // const delta = middle - e.scrollPos;
    //       // const offset = delta * 0.04;
    //
    //       // $yearContainer.css({
    //       //   transform: 'translateY(' + offset + 'px)'
    //       // });
    //     }
    //   })
    //   .addTo(smController);
    //
    // App.W.on('resized', function() {
    //   historyDuration = $('.js-mp-history').height() + 150;
    //   historyScene.refresh();
    // });


    $historyItems.each(function() {
      const $item = $(this);
      const year = $item.data('year');
      const age = year.toString().substring(0, 2);
      let sceneDuration = $item.height() + 45;

      const scene = new ScrollMagic.Scene({
        triggerElement: $item[0],
        duration: sceneDuration
      })
        .on('enter leave', function(e) {
          if (e.type == 'enter') {
            const topAge = $ageItems.filter('[data-age="'+ age +'"]').position().top * -1;
            const topYear = $yearItems.filter('[data-year="'+ year +'"]').position().top * -1;

            $yearsInner.css({
              top: topYear + 'px'
            });

            $ageInner.css({
              top: topAge + 'px'
            });

            $timelineItems
              .removeClass('_active')
              .filter('[data-year="'+ year +'"]')
              .addClass('_active');
          }
        })
        .addTo(smController);

      App.W.on('resized', function () {
        sceneDuration = $item.height() + 45;
        scene.refresh();
      });
    });


    $timelineItems.on('click', function() {
      const year = $(this).data('year');
      // console.log(year);
      const top = $historyItems.filter('[data-year="' + year + '"]').offset().top - App.W.height() / 2 + 170;

      $('html, body').animate({
        scrollTop: top
      }, 500);
    });


    // $('.js-history-skip').on('click', function() {
    //   const top = $('.js-mp-test').offset().top - 100;
    //   $('html, body').animate({
    //     scrollTop: top
    //   }, 500);
    // });
  })();

})();

$(document).ready(function(){
  $(".ajax--js a").click(function(){
    // $(".ajax--js a").removeClass('active');
    // const link = $(this).attr('href');
    //
    // $("#box").load(link);
    // $(this).addClass('active');
    // $('body,html').animate({scrollTop: 0}, 1000);

    return false;
  });
});

$(window).scroll(function(){
  if($("#box").length) {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      const link = $('.ajax--js .active').attr('href');
      const setData = link;
      $("#box").load(setData);
      setTimeout(() => {
        $(".ajax--js a").removeClass('active');
        $(`.ajax--js a.${setData}`).addClass('active');
      }, 500);
      $('body,html').animate({scrollTop: 0});
    }
  }
});
