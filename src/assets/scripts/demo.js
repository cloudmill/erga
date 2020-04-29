
// anchor
$(".anchor").on("click","a", function (event) {
  event.preventDefault();
  const id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top + 40}, 1000);
});
// anchor


// adaptive menu
$('.main-nav__toggle--js').click(function () {
  $(this).next().slideToggle();
});
// adaptive menu


export function closeContainer(value, e) {
  const container = $(value);
  if (container.length && !container.is(e.target) && container.has(e.target).length === 0){
    container.removeClass("active");
  }
}
