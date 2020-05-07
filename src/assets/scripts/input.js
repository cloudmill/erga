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

$('.steps-form, .steps-form-valid').on("blur", '.input input, .textarea textarea', function(event){
  validateField($(this), event);
});
$('.input input, .textarea textarea').on("blur", function(event){
  validateField($(this), event);
});


$('.return--js').click(function () {
  $(this).closest('.contacts-form').hide(500);
  $(this).closest('.contacts-form').prev().show();
  setTimeout(() => AOS.refresh({offset: -80}), 500);

  return false;
});

function isValidEmail(email, strict) {
  if (!strict) email = email.replace(/^\s+|\s+$/g, '');
  return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]+[a-z]/i).test(email);
}
$(document).on("submit", "#filter", function () {
  var formData = new FormData(this);
  var page = $('input[name=page]').val();
  $.ajax({
      type: "POST",
      url: "/local/templates/main/include/pages/catalog/catalog.php",
      data: formData,
      processData: false,
      contentType: false,
      success: function (msg) {
          $("#catalog").html(msg);
      }
  });

  if ($(this).hasClass('mat_act')) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/include/pages/catalog/mat.php",
          data: formData,
          processData: false,
          contentType: false,
          success: function (msg) {
              $("#material").html(msg);
              $('#filter').removeClass("mat_act");
          }
      });
  }
  if (page == 'industry') {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/include/pages/catalog/eq.php",
          data: formData,
          processData: false,
          contentType: false,
          success: function (msg) {
              $("#equipment").html(msg);
          }
      });
  }
  return false;
});
 
$(document).on("change", "#filter input", function () {
  var sector = $('#industry input:checked').val();
  if (sector) {
      $('[data-type=material]').removeClass('disabled');
  } else {
      $('[data-type=material]').addClass('disabled');
  }
  $('#filter').submit();
});

$(document).on("change", "#industry input", function () {
  $('#filter').addClass("mat_act");
  $('#filter').submit();
});

$(document).on("click", ".filter__item.reset--js", function () {
  $('#filter').submit();
});

$(document).on("change", "#config input[name=config]", function () {
  var sector = $('#config input[name=config]:checked').data('val');
  $.ajax({
      type: "POST",
      url: "/local/templates/main/include/pages/config/mat.php",
      data: ({
          "sector": sector
      }),
      success: function (msg) {
          $("#mat").html(msg);
      }
  });
});

$(document).on("change", "#config input[name=material]", function () {
  var sector = $('#config input[name=config]:checked').data('val'),
      material = $('#config input[name=material]:checked').data('val');
  $.ajax({
      type: "POST",
      url: "/local/templates/main/include/pages/config/catalog.php",
      data: ({
          "sector": sector,
          "material": material,
      }),
      success: function (msg) {
          $("#config_catalog").html(msg);
          var cnt = 0;
          $(".catalog-content__item").each(function (index) {
              cnt++;
          });
          $('.config-textres').html('<p>Подобрано оборудования: ' + cnt + '</p>');
      }
  });
});

$(document).on("click", "#video_block .approach-video-link", function () {
  var mist = 0;
  var video_id = $('#video_block input[name=video_id]').val();
  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/video/play.php",
          data: ({
              "video_id": video_id
          }),
          success: function (msg) {
              $("#video_block").append(msg);
          }
      });
  }
  return false;
});

$(document).on("click", ".swiper-btnS1-next", function () {
  $(".video_block").html('');
});

$(document).on("click", ".swiper-btnS1-prev", function () {
  $(".video_block").html('');
});

$(document).on("click", ".t__content.video .approach-video-link", function () {
  var mist = 0;
  var video_id = $(this).parents('.video').children('input[name=video_id]').val();
  var id = $(this).parents('.video').data('id');
  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/video/play.php",
          data: ({
              "video_id": video_id
          }),
          success: function (msg) {
              ;
              $(".video_block_" + id).html(msg);
          }
      });
  }
  return false;
});

$(document).on("click", "[data-event=question_submit] .send--js", function () {
  var mist = 0;
  var sessid = $('#question_form input[name=sessid]').val();
  var name = $('#question_form input[name=name]').val();
  var company = $('#question_form input[name=company]').val();
  var phone = $('#question_form input[name=phone]').val();
  var email = $('#question_form input[name=email]').val();
  var sector = $('#question_form select[name=sector]').val();
  var sector_name = $('#question_form option[value=' + sector + ']').html();
  var text = $('#question_form textarea[name=text]').val();
  var agree = '';
  agree = $('#question_form input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#question_form input[name=checkbox]').parent().addClass("error");
  } else {
      $('#question_form input[name=checkbox]').parent().removeClass("error");
  }
  if (phone != '') {
      $('#question_form input[name=phone]').parent().removeClass("error");
  } else {
      $('#question_form input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#question_form input[name=email]').parent().removeClass("error");
  } else {
      $('#question_form input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }
  if (sector > 0) {
      $('#question_form select[name=sector]').parent().removeClass("error");
  } else {
      $('#question_form select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }
  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/add_question.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "sector_name": sector_name,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $('#question_form input[name=name]').val('');
              $('#question_form input[name=company]').val('');
              $('#question_form input[name=phone]').val('');
              $('#question_form input[name=email]').val('');
              $('#question_form select[name=sector]').val('');
              $('#question_form textarea[name=text]').val('');
              $("#question_form input[name=checkbox]").prop("checked", false);

              $("#question_form").hide(500);
              $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "[data-event=consult_submit] .send--js", function () {
  var mist = 0;
  var sessid = $('#consult_form input[name=sessid]').val();
  var name = $('#consult_form input[name=name]').val();
  var company = $('#consult_form input[name=company]').val();
  var phone = $('#consult_form input[name=phone]').val();
  var email = $('#consult_form input[name=email]').val();
  var sector = $('#consult_form select[name=sector]').val();
  var sector_name = $('#consult_form option[value=' + sector + ']').html();
  var text = $('#consult_form textarea[name=text]').val();
  var agree = '';
  agree = $('#consult_form input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#consult_form input[name=checkbox]').parent().addClass("error");
  } else {
      $('#consult_form input[name=checkbox]').parent().removeClass("error");
  }
  if (phone != '') {
      $('#consult_form input[name=phone]').parent().removeClass("error");
  } else {
      $('#consult_form input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#consult_form input[name=email]').parent().removeClass("error");
  } else {
      $('#consult_form input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }
  if (sector > 0) {
      $('#consult_form select[name=sector]').parent().removeClass("error");
  } else {
      $('#consult_form select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }
  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/add_consult.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "sector_name": sector_name,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $('#consult_form input[name=name]').val('');
              $('#consult_form input[name=company]').val('');
              $('#consult_form input[name=phone]').val('');
              $('#consult_form input[name=email]').val('');
              $('#consult_form select[name=sector]').val('');
              $('#consult_form textarea[name=text]').val('');
              $("#consult_form input[name=checkbox]").prop("checked", false);

              $("#consult_form").hide(500);
              $("#consult_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("submit", "#send_form", function () {
  var mist = 0;
  var sessid = $('#send_form input[name=sessid]').val();
  var email = $('#send_form input[name=mail]').val();

  if (isValidEmail(email)) {
      $('#send_form input[name=mail]').parent().removeClass("error");
  } else {
      $('#send_form input[name=mail]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/add_send.php",
          data: ({
              "sessid": sessid,
              "email": email,
          }),
          success: function (msg) {
              $("#send_form").html(msg);
          }
      });
  }
  return false;
});

$(document).on("click", "#callback_form .send--js", function (e) {
  e.preventDefault();
  var mist = 0;
  var sessid = $('#callback_form input[name=sessid]').val();
  var name = $('#callback_form input[name=name]').val();
  var company = $('#callback_form input[name=company]').val();
  var phone = $('#callback_form input[name=phone]').val();
  var sector = $('#callback_form select[name=sector]').val();
  var text = $('#callback_form textarea[name=text]').val();
  var sector_name = $('#callback_form option[value=' + sector + ']').html();
  var agree = '';
  agree = $('#callback_form input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#callback_form input[name=checkbox]').parent().addClass("error");
  } else {
      $('#callback_form input[name=checkbox]').parent().removeClass("error");
  }
  if (phone != '') {
      $('#callback_form input[name=phone]').parent().removeClass("error");
  } else {
      $('#callback_form input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/add_callback.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "sector_name": sector_name,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $(".popup-modal-dismiss").trigger("click");
              $('#callback_form input[name=name]').val('');
              $('#callback_form input[name=company]').val('');
              $('#callback_form input[name=phone]').val('');
              $('#callback_form textarea[name=text]').val('');
              $("#callback_form input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#dow_lleaflet .send--js", function () {
  var mist = 0;
  var sessid = $('#dow_lleaflet input[name=sessid]').val();
  var name = $('#dow_lleaflet input[name=name]').val();
  var company = $('#dow_lleaflet input[name=company]').val();
  var phone = $('#dow_lleaflet input[name=phone]').val();
  var sector = $('#dow_lleaflet select[name=sector]').val();
  var text = $('#dow_lleaflet textarea[name=text]').val();
  var email = $('#dow_lleaflet input[name=email]').val();
  var leaflet = $('input[name=leaflet]').val();

  var agree = '';
  agree = $('#dow_lleaflet input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#dow_lleaflet input[name=checkbox]').parent().addClass("error");
  } else {
      $('#dow_lleaflet input[name=checkbox]').parent().removeClass("error");
  }
  if (sector != null) {
      $('#dow_lleaflet select[name=sector]').parent().removeClass("error");
  } else {
      $('#dow_lleaflet select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }

  if (phone != '') {
      $('#dow_lleaflet input[name=phone]').parent().removeClass("error");
  } else {
      $('#dow_lleaflet input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#dow_lleaflet input[name=email]').parent().removeClass("error");
  } else {
      $('#dow_lleaflet input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/dow_lleaflet.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "leaflet": leaflet,
              "phone": phone,
              "email": email,
              "sector": sector,
              "text": text
          }),
          dataType: 'json',
          success: function (msg) {
              window.open(msg.file, 'width=640,height=480');
              $(".popup-modal-dismiss").trigger("click");
              $('#dow_lleaflet input[name=name]').val('');
              $('#dow_lleaflet input[name=company]').val('');
              $('#dow_lleaflet input[name=phone]').val('');
              $('#dow_lleaflet input[name=email]').val('');
              $('#dow_lleaflet textarea[name=text]').val('');
              $("#dow_lleaflet input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#dow_catalog .send--js", function () {
  var mist = 0;
  var sessid = $('#dow_catalog input[name=sessid]').val();
  var name = $('#dow_catalog input[name=name]').val();
  var company = $('#dow_catalog input[name=company]').val();
  var phone = $('#dow_catalog input[name=phone]').val();
  var sector = $('#dow_catalog select[name=sector]').val();
  var text = $('#dow_catalog textarea[name=text]').val();
  var mat = $('#dow_catalog input[name=mat]').val();
  var email = $('#dow_catalog input[name=email]').val();
  var catalog = $('input[name=catalog]').val();

  var agree = '';
  agree = $('#dow_catalog input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#dow_catalog input[name=checkbox]').parent().addClass("error");
  } else {
      $('#dow_catalog input[name=checkbox]').parent().removeClass("error");
  }
  if (sector != null) {
      $('#dow_catalog select[name=sector]').parent().removeClass("error");
  } else {
      $('#dow_catalog select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }

  if (phone != '') {
      $('#dow_catalog input[name=phone]').parent().removeClass("error");
  } else {
      $('#dow_catalog input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#dow_catalog input[name=email]').parent().removeClass("error");
  } else {
      $('#dow_catalog input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/dow_catalog.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "mat": mat,
              "sector": sector,
              "catalog": catalog,
              "text": text
          }),
          success: function (msg) {
              window.open(msg.file, 'width=640,height=480');
              $(".popup-modal-dismiss").trigger("click");
              $('#dow_catalog input[name=name]').val('');
              $('#dow_catalog input[name=company]').val('');
              $('#dow_catalog input[name=phone]').val('');
              $('#dow_catalog input[name=email]').val('');
              $('#dow_catalog input[name=mat]').val('');
              $('#dow_catalog textarea[name=text]').val('');
              $("#dow_catalog input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#separation .send--js", function () {
  var mist = 0;
  var sessid = $('#separation input[name=sessid]').val();
  var name = $('#separation input[name=name]').val();
  var company = $('#separation input[name=company]').val();
  var phone = $('#separation input[name=phone]').val();
  var sector = $('#separation select[name=sector]').val();
  var text = $('#separation textarea[name=text]').val();
  var mat = $('#separation input[name=mat]').val();
  var email = $('#separation input[name=email]').val();

  var agree = '';
  agree = $('#separation input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#separation input[name=checkbox]').parent().addClass("error");
  } else {
      $('#separation input[name=checkbox]').parent().removeClass("error");
  }
  if (sector != null) {
      $('#separation select[name=sector]').parent().removeClass("error");
  } else {
      $('#separation select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }

  if (phone != '') {
      $('#separation input[name=phone]').parent().removeClass("error");
  } else {
      $('#separation input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mat != '') {
      $('#separation input[name=mat]').parent().removeClass("error");
  } else {
      $('#separation input[name=mat]').parent().addClass("error");
      mist = mist + 1;
  }


  if (isValidEmail(email)) {
      $('#separation input[name=email]').parent().removeClass("error");
  } else {
      $('#separation input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/separation.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "mat": mat,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $(".popup-modal-dismiss").trigger("click");
              $('#separation input[name=name]').val('');
              $('#separation input[name=company]').val('');
              $('#separation input[name=phone]').val('');
              $('#separation input[name=email]').val('');
              $('#separation input[name=mat]').val('');
              $('#separation textarea[name=text]').val('');
              $("#separation input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#price .send--js", function () {
  var mist = 0;
  var sessid = $('#price input[name=sessid]').val();
  var name = $('#price input[name=name]').val();
  var company = $('#price input[name=company]').val();
  var phone = $('#price input[name=phone]').val();
  var sector = $('#price select[name=sector]').val();
  var text = $('#price textarea[name=text]').val();
  var mat = $('#price input[name=mat]').val();
  var email = $('#price input[name=email]').val();

  var agree = '';
  agree = $('#price input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#price input[name=checkbox]').parent().addClass("error");
  } else {
      $('#price input[name=checkbox]').parent().removeClass("error");
  }
  if (sector != null) {
      $('#price select[name=sector]').parent().removeClass("error");
  } else {
      $('#price select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }

  if (phone != '') {
      $('#price input[name=phone]').parent().removeClass("error");
  } else {
      $('#price input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#price input[name=email]').parent().removeClass("error");
  } else {
      $('#price input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/price.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "mat": mat,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $(".popup-modal-dismiss").trigger("click");
              $('#price input[name=name]').val('');
              $('#price input[name=company]').val('');
              $('#price input[name=phone]').val('');
              $('#price input[name=email]').val('');
              $('#price input[name=mat]').val('');
              $('#price textarea[name=text]').val('');
              $("#price input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#own_mat .send--js", function () {
  var mist = 0;
  var sessid = $('#own_mat input[name=sessid]').val();
  var name = $('#own_mat input[name=name]').val();
  var company = $('#own_mat input[name=company]').val();
  var phone = $('#own_mat input[name=phone]').val();
  var sector = $('#own_mat select[name=sector]').val();
  var text = $('#own_mat textarea[name=text]').val();
  var mat = $('#own_mat input[name=mat]').val();
  var email = $('#own_mat input[name=email]').val();

  var agree = '';
  agree = $('#own_mat input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#own_mat input[name=checkbox]').parent().addClass("error");
  } else {
      $('#own_mat input[name=checkbox]').parent().removeClass("error");
  }
  if (sector != null) {
      $('#own_mat select[name=sector]').parent().removeClass("error");
  } else {
      $('#own_mat select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }

  if (phone != '') {
      $('#own_mat input[name=phone]').parent().removeClass("error");
  } else {
      $('#own_mat input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#own_mat input[name=email]').parent().removeClass("error");
  } else {
      $('#own_mat input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/own_mat.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "mat": mat,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $(".popup-modal-dismiss").trigger("click");
              $('#own_mat input[name=name]').val('');
              $('#own_mat input[name=company]').val('');
              $('#own_mat input[name=phone]').val('');
              $('#own_mat input[name=email]').val('');
              $('#own_mat input[name=mat]').val('');
              $('#own_mat textarea[name=text]').val('');
              $("#own_mat input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#own_sector .send--js", function () {
  var mist = 0;
  var sessid = $('#own_sector input[name=sessid]').val();
  var name = $('#own_sector input[name=name]').val();
  var company = $('#own_sector input[name=company]').val();
  var phone = $('#own_sector input[name=phone]').val();
  var sector = $('#own_sector input[name=sector]').val();
  var email = $('#own_sector input[name=email]').val();

  var agree = '';
  agree = $('#own_sector input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#own_sector input[name=checkbox]').parent().addClass("error");
  } else {
      $('#own_sector input[name=checkbox]').parent().removeClass("error");
  }
  if (sector != '') {
      $('#own_sector input[name=sector]').parent().removeClass("error");
  } else {
      $('#own_sector input[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }

  if (phone != '') {
      $('#own_sector input[name=phone]').parent().removeClass("error");
  } else {
      $('#own_sector input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#own_sector input[name=email]').parent().removeClass("error");
  } else {
      $('#own_sector input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }

  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/own_sector.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "sector": sector
          }),
          success: function (msg) {
              $(".popup-modal-dismiss").trigger("click");
              $('#own_sector input[name=name]').val('');
              $('#own_sector input[name=company]').val('');
              $('#own_sector input[name=phone]').val('');
              $('#own_sector input[name=email]').val('');
              $('#own_sector input[name=sector]').val('');
              $("#own_sector input[name=checkbox]").prop("checked", false);

              // $("#question_form").hide(500);
              // $("#question_result").show();
          }
      });

  } else {
      //     ,t(".send--js").click((function(){return t(this).closest(".contacts-form").hide(500),t(this).closest(".contacts-form").next().show(),setTimeout((function(){return s.a.refresh({offset:-80})}),500),!1}

      // $(this).closest(".contacts-form").hide(500);
      // $(this).closest(".contacts-form").next().show();
  }
  return false;
});

$(document).on("click", "#contacts_form .send--js", function () {
  var mist = 0;
  var sessid = $('#contacts_form input[name=sessid]').val();
  var name = $('#contacts_form input[name=name]').val();
  var company = $('#contacts_form input[name=company]').val();
  var phone = $('#contacts_form input[name=phone]').val();
  var email = $('#contacts_form input[name=email]').val();
  var sector = $('#contacts_form select[name=sector]').val();
  var sector_name = $('#contacts_form option[value=' + sector + ']').html();
  var text = $('#contacts_form textarea[name=text]').val();
  var agree = '';
  agree = $('#contacts_form input[name=checkbox]:checked').val();
  if (agree != 'y') {
      mist = mist + 1;
      $('#contacts_form input[name=checkbox]').parent().addClass("error");
  } else {
      $('#contacts_form input[name=checkbox]').parent().removeClass("error");
  }
  if (phone != '') {
      $('#contacts_form input[name=phone]').parent().removeClass("error");
  } else {
      $('#contacts_form input[name=phone]').parent().addClass("error");
      mist = mist + 1;
  }
  if (isValidEmail(email)) {
      $('#contacts_form input[name=email]').parent().removeClass("error");
  } else {
      $('#contacts_form input[name=email]').parent().addClass("error");
      mist = mist + 1;
  }
  if (sector > 0) {
      $('#contacts_form select[name=sector]').parent().removeClass("error");
  } else {
      $('#contacts_form select[name=sector]').parent().addClass("error");
      mist = mist + 1;
  }
  if (mist == 0) {
      $.ajax({
          type: "POST",
          url: "/local/templates/main/ajax/form/add_contacts.php",
          data: ({
              "sessid": sessid,
              "company": company,
              "name": name,
              "phone": phone,
              "email": email,
              "sector_name": sector_name,
              "sector": sector,
              "text": text
          }),
          success: function (msg) {
              $('#contacts_form input[name=name]').val('');
              $('#contacts_form input[name=company]').val('');
              $('#contacts_form input[name=phone]').val('');
              $('#contacts_form input[name=email]').val('');
              $('#contacts_form select[name=sector]').val('');
              $('#contacts_form textarea[name=text]').val('');
              $("#contacts_form input[name=checkbox]").prop("checked", false);

              $(".popup-modal-dismiss").trigger("click");
          }
      });
  }
  return false;
});

$(document).on("click", ".history .tabs-list .tab", function () {
  $(".history .tabs-list .tab").removeClass('active');
  $(this).addClass('active');
  var tab = $('.history .tabs-list .tab.active').data('box-tab');
  $('.box_tab').hide();
  $('[data-box=' + tab + ']').show();

  $('html, body').animate({
      scrollTop: 0
  }, 400);
  $('.mp-history__timeline-item').removeClass('_active');
  $('.first_active').addClass('_active');

  return false;
});

$(document).on('scroll', function () {
  var top = $(window).scrollTop();

  if (top < 100) {
      $('.mp-history__timeline-item').removeClass('_active');
      $('.first_active').addClass('_active');
  }
});
