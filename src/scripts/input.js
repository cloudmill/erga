import AOS from "aos";

function validateField(element, event) {
  const isRequired = element.attr('required');
  const value = event.target.value;
  const tmpval = element.val();
  const isNumber = element.parent().hasClass('isNumber');

  if(tmpval == '') {
    element.closest('.input').removeClass('input--filled');
  } else {
    element.closest('.input').addClass('input--filled');
  }
  if(value) {
    if(isNumber && isNaN(value)) {
      element.closest('.input').addClass('error');
      element.closest('.input').next();
      element.closest('.input').next().text('Укажите числовое значение');
    } else {
      element.closest('.input').removeClass('error');
    }
  }
  if(!value && isRequired) {
    element.closest('.input').addClass('error');
    element.closest('.input').next();
    element.closest('.input').next().text('Пожалуйста, заполните поле');
  }
}

$('.steps-form').on("blur", '.input input, .textarea textarea', function(event){
  validateField($(this), event);
});
$('.input input, .textarea textarea').on("blur", function(event){
  validateField($(this), event);
});

$('.send--js').click(function () {
  $(this).closest('.contacts-form').hide(500);
  $(this).closest('.contacts-form').next().show();
  setTimeout(() => AOS.refresh({offset: -80}), 500);

  return false;
});
$('.return--js').click(function () {
  $(this).closest('.contacts-form').hide(500);
  $(this).closest('.contacts-form').prev().show();
  setTimeout(() => AOS.refresh({offset: -80}), 500);

  return false;
});
