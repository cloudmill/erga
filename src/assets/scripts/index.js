import 'jquery.marquee';
import 'select2';
import "magnific-popup";
import AOS from "aos";


$('.share--js').click(function () {
  $(this).parent().find('.card-share-icon').toggleClass('active');
  return false;
});

$(document).on('click', '#filters a', function () {
  $('.grid > *').slideUp('slow').addClass('transparent');
  $('#filters a').removeClass('active');
  $(this).addClass('active');
  const filterValue = $(this).data('filter');
  // $('.accordion-item')
  // $grid.arrange({filter: filterValue})
  $(filterValue).slideDown('slow');
  $(filterValue).removeClass('transparent');
  if(filterValue === 'all') {
    $('.grid > *').slideDown('slow');
  }
  setTimeout(() => AOS.refresh(), 500);
  return false;
});

// popup
$('.popup-modal').magnificPopup({
  type: 'inline',
  removalDelay: 1300,
  mainClass: 'my-mfp-zoom-in',
  showCloseBtn: false,
  fixedContentPos: true,
});
$(document).on('click', '.popup-modal-dismiss', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});

//filter
// $(".filter--js .filter__item:not(.disabled)").click(function () {
//   const getType = $(this).data('type');
//   $('.filtersBody__item#' + getType).addClass('active');
// });
$(document).on('click', '.filter--js .filter__item:not(.disabled)', function () {
  const getType = $(this).data('type');
  $('.filtersBody__item#' + getType).addClass('active');
});
$(document).on('click', '.filter--js .filter__item.disabled', function () {
  $(this).find('.filter__item-error').slideToggle();
});
$(document).mouseup(function (e) {
  const container = $('.filter__item.disabled');
  if (container.length && !container.is(e.target) && container.has(e.target).length === 0){
    $('.filter__item-error').slideUp();
  }
});

// $(".filter--js .filter__item.disabled").click(function () {
//   $(this).find('.filter__item-error').slideDown();
// });
$(document).on("click", ".filtersBody__item-close", function () {
  $(this).closest('.filtersBody__item').removeClass('active');
});
$(document).on('click', '.reset-filterBody', function(){
  const getID = $(this).closest('.filtersBody__item').attr('id');
  $(this).closest('.filtersBody__item').find('input:checkbox').prop('checked', false);
  const filterItem = $('.filter--js').find('.filter__item[data-type=' + getID + ']');
  const data = $(filterItem).data('title');
  $(filterItem).removeClass('active');
  $(filterItem).find('span').text(data);
  $(filterItem).find('b').text('');
  $('#filter').submit();
});
$(document).on('click', '.get-filterBody', function(){
  const getID = $(this).closest('.filtersBody__item').attr('id');
  const getChecked = $(this).closest('.filtersBody__item').find('input:checkbox:checked');
  const getLength = getChecked.length;
  let string = '';
  $(getChecked).each(function () {
    string += `${$(this).data('title')} `;
  })

  if (getLength) {
    if (getLength > 1) {
      $('.filter--js').find('.filter__item[data-type=' + getID + '] b').text(getLength);
    }
    $('.filter--js').find('.filter__item[data-type=' + getID + '] > span').text(string);
    $('.filter--js').find('.filter__item[data-type=' + getID + ']').addClass('active');
  }
  $(this).closest('.filtersBody__item').removeClass('active');
  $('#filter').submit();
});
$(document).on('click', '.reset--js', function(){
  $('.filtersBody').find('input:checkbox').prop('checked', false);
  const items = $('.filter').find('.filter__item');
  $(items).each(function () {
    const data = $(this).data('title');
    $(this).removeClass('active');
    $(this).find('span').text(data);
    $(this).find('b').text('');
  });
  $('#filter').submit();
});
//filter


$(".showText--js").click(function () {
  $(this)
    .hide()
    .prev()
    .addClass('active');
});

$(".catalog-menu__item--parent > a").click(function () {
  $(this).parent().toggleClass('active');
  return false;
});

$(".catalog-menu-mobile").click(function () {
  $(this).next().toggleClass('active');
  return false;
});
$(".catalog-menu-close").click(function () {
  $(this).parent().toggleClass('active');
  return false;
});
$(document).on("click", ".config-filter__item input", function () {
  const data = $(this).attr('data-name');
  $(this).closest('.config-block').hide('300').next().addClass('active').find('.txt').text(data);
  $(this).closest('.config-block').hide('300').next().next().show('300');

  const getRes = $('.config-block-text.active').length;
  if (getRes > 1) {
    $('.config-result').show('300');
  }
  setTimeout(() => AOS.refresh({offset: -80}), 500);
  $('#config').submit();
});
$(document).on("click", ".config-block-text", function () {
  $(this).removeClass('active');
  $(this).prev().show('300').find('input:radio').prop('checked', false);
  $(this).next().hide('300');
  const getRes = $('.config-block-text.active').length;
  if (getRes < 2) {
    $('.config-result, .config-textres').hide('300');
  }
  setTimeout(() => AOS.refresh({offset: -80}), 500);
  $('#config').submit();
});

// $(".catalog-content__item").mouseover(function (e) {
//   // const n = e.clientX - $(this).position().left;
//   // const r = e.clientY - $(this).position().top;
//   // const s = $(this).width() / 2;
//   // const o = $(this).height() / 2;
//   // const a = -1 * ((n - s) / s) * 5;
//   // const l = 1 * ((r - o) / o);
//   // $(this).css({
//   //   '--mouseY': `${a}deg`,
//   //   '--mouseX': `${a}deg`
//   // })
//   const i = this.getBoundingClientRect(),
//     n = e.clientX - i.left,
//     r = e.clientY - i.top,
//     s = this.offsetWidth / 2,
//     o = this.offsetHeight / 2,
//     a = -1 * ((n - s) / s) * 5,
//     l = 5 * ((r - o) / o);
//   this.style.setProperty("--mouseY", a + "deg"), this.style.setProperty("--mouseX", l + "deg")
// });

$(".sliderTab--js .sliderTab-item").click(function () {
  $('.sliderTab-item').removeClass('active');
  $(this).addClass('active');
  if ($('.sliderTab-item:last-child').hasClass('active')) {
    $('.sliderList').addClass('active');
  } else {
    $('.sliderList').removeClass('active');
  }
});


$(function () {
  $('.marquees').marquee({
    duration: 45000,
    direction: 'left',
    startVisible: true,
    duplicated: true
  });
  $('.marquee-rtl').marquee({
    duration: 30000,
    direction: 'right',
    startVisible: true,
    duplicated: true
  });
});


// accordion
$(".accordion").on("click", ".accordion-header", function () {
  $(this)
    .parent().toggleClass("active")
    .find('.accordion-content')
    .slideToggle();

  // setTimeout(() => layoutIsotope(), 200);

  setTimeout(() => AOS.refresh({offset: -80}), 500);
});


// select
$(".select").select2({
  minimumResultsForSearch: Infinity
});
$('.select').on('select2:open', function () {
  $('.select2-dropdown').hide();
  setTimeout(function () {
    $('.select2-dropdown').slideDown("slow");
  }, 200);
});



$('.language-eng').on('click', function(){
  $('.select-lang').toggleClass('select-lang--active');
});

$('.lang').on('click', function(){
  let main = $('.lang-main');
  let text;
  if (!$(this).hasClass('lang-act')){
    text = $(this).text();
    main.text(text);
    $('.lang').removeClass('lang-act');
    $(this).addClass('lang-act');
  }
});


$('.language-el').on('click', function(){
  $('.language-el').removeClass('active');
  $(this).addClass('active');
});

$(window).on('click', function(event){
  if ( $('.select-lang').hasClass('select-lang--active') && !( $(event.target).hasClass('language-eng') || $(event.target).hasClass('select-lang') ) ){
    $('.select-lang').removeClass('select-lang--active');
  }

});

$(window).scroll(function(){
  console.log('kn');
});

