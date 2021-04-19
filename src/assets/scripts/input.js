import AOS from "aos";

let lang = $('input:hidden[name=lang]').val();

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function validatePhone(phone) {
    if (lang == 'en') {
        const re = /^\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    } else {
        const re = /^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    }
    
    return re.test(phone);
}


function validateField(element, event) {
    const isRequired = element.attr('required');
    const value = event.target.value;
    const tmpval = element.val();
    const isNumber = element.parent().hasClass('isNumber');

    if (tmpval == '') {
        element.closest('.input').removeClass('input--filled');
    } else {
        element.closest('.input').addClass('input--filled');
    }

    if (value) {
        if (isNumber && isNaN(value)) {
            element.closest('.input').addClass('error');
            element.closest('.input').next().text('Укажите числовое значение');
        } else if (element.prop('type') === 'email') {
            if (validateEmail(value)) {
                element.closest('.input').removeClass('error');
            } else {
                element.closest('.input').addClass('error');
                element.closest('.input').next().text('Please, fill in the field correctly');
            }
        } else if (element.prop('name') === 'phone') {
            if (value) {
                element.closest('.input').removeClass('error');
            } else {
                element.closest('.input').addClass('error');
                element.closest('.input').next().text('Please, fill in the field correctly');
            }
        } else {
            element.closest('.input').removeClass('error');
        }
    }
    if (!value && isRequired) {
        element.closest('.input').addClass('error');
        element.closest('.input').next().text('Please, fill in the field correctly');
    }
}

$('.steps-form, .steps-form-valid').on("blur", '.input input, .textarea textarea', function (event) {
    validateField($(this), event);
});
$(document).on("blur", '.input input, .textarea textarea', function (event) {
    validateField($(this), event);
});


$('.return--js').click(function () {
    if ($(this).closest('#get-quote').length !== 0) {
        $(this).closest('#get-quote').find('.form-request').css('display', '');
        $(this).closest('#get-quote').find('.form-response').css('display', '');
        
        return false;
    }

    $(this).closest('.contacts-form').hide(500);
    $(this).closest('.contacts-form').prev().show();
    setTimeout(() => AOS.refresh({
        offset: -80
    }), 500);

    return false;
});

function isValidEmail(email, strict) {
    if (!strict) email = email.replace(/^\s+|\s+$/g, '');
    return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]+[a-z]/i).test(email);
}

function forms() {
    $(document).on("click", "#callback_form .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#callback_form input[name=sessid]').val();
        var name = $('#callback_form input[name=name]').val();
        var company = $('#callback_form input[name=company]').val();
        var phone = $('#callback_form input[name=phone]').val();
        var sector = $('#callback_form select[name=sector]').val();
        var sector_name = $('#callback_form option[value=' + sector + ']').html();
        var agree = '';
        agree = $('#callback_form input[name=checkbox]:checked').val();
        if (agree != 'y') {
            mist = mist + 1;
            $('#callback_form input[name=checkbox]').parent().addClass("error");
        } else {
            $('#callback_form input[name=checkbox]').parent().removeClass("error");
        }
        if (phone) {
            $('#callback_form input[name=phone]').parent().removeClass("error");
        } else {
            $('#callback_form input[name=phone]').parent().addClass("error");
            mist = mist + 1;
        }
        if (sector) {
            $('#callback_form select[name=sector]').parent().removeClass("error");
        } else {
            $('#callback_form select[name=sector]').parent().addClass("error");
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
                    "sector": sector_name,
                    "url": window.location.href
                }),
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
                    $('#callback_form .popup-modal-dismiss').trigger("click");
                    $('#callback_form input[name=name]').val('');
                    $('#callback_form input[name=company]').val('');
                    $('#callback_form input[name=phone]').val('');
                    $('#callback_form input[name=checkbox]').prop("checked", false);
                }
            });
        }
    });

    $(document).on("click", "#question_form .send--js", function (e) {
        e.preventDefault();
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
        if (phone) {
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
        if (sector) {
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
                    "sector": sector_name,
                    "text": text,
                    "url": window.location.href
                }),
                //dataType: 'json',
                success: function (msg) {
                    console.log(msg);
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

        }
    });

    $(document).on("click", "#callback_form2 .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#callback_form2 input[name=sessid]').val();
        var name = $('#callback_form2 input[name=name]').val();
        var company = $('#callback_form2 input[name=company]').val();
        var phone = $('#callback_form2 input[name=phone]').val();
        var sector = $('#callback_form2 select[name=sector]').val();
        var sector_name = $('#callback_form2 option[value=' + sector + ']').html();
        var text = $('#callback_form2 textarea[name=text]').val();
        var agree = '';
        agree = $('#callback_form2 input[name=checkbox]:checked').val();
        if (agree != 'y') {
            mist = mist + 1;
            $('#callback_form2 input[name=checkbox]').parent().addClass("error");
        } else {
            $('#callback_form2 input[name=checkbox]').parent().removeClass("error");
        }
        if (phone) {
            $('#callback_form2 input[name=phone]').parent().removeClass("error");
        } else {
            $('#callback_form2 input[name=phone]').parent().addClass("error");
            mist = mist + 1;
        }
        if (sector) {
            $('#callback_form2 select[name=sector]').parent().removeClass("error");
        } else {
            $('#callback_form2 select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }

        if (mist == 0) {
            $.ajax({
                type: "POST",
                url: "/local/templates/main/ajax/form/add_callback.php",
                data: ({
                    "type": 2,
                    "sessid": sessid,
                    "company": company,
                    "name": name,
                    "phone": phone,
                    "sector_name": sector_name,
                    "sector": sector,
                    "text": text,
                    "url": window.location.href
                }),
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
                    $('#callback_form2 .popup-modal-dismiss').trigger("click");
                    $('#callback_form2 input[name=name]').val('');
                    $('#callback_form2 input[name=company]').val('');
                    $('#callback_form2 input[name=phone]').val('');
                    $('#callback_form2 input[name=checkbox]').prop("checked", false);
                }
            });

        }
    });

    $(document).on("click", "#contacts_form .send--js", function (e) {
        e.preventDefault();
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
        if (phone) {
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
        if (sector) {
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
                    "sector": sector_name,
                    "text": text,
                    "url": window.location.href
                }),
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
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

    $(document).on("click", "#own_sector .send--js", function (e) {
        e.preventDefault();
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
                    "sector": sector,
                    "url": window.location.href
                }),
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
                    $(".popup-modal-dismiss").trigger("click");
                    $('#own_sector input[name=name]').val('');
                    $('#own_sector input[name=company]').val('');
                    $('#own_sector input[name=phone]').val('');
                    $('#own_sector input[name=email]').val('');
                    $('#own_sector input[name=sector]').val('');
                    $("#own_sector input[name=checkbox]").prop("checked", false);
                }
            });

        }
    });

    $(document).on("click", "#own_mat .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#own_mat input[name=sessid]').val();
        var name = $('#own_mat input[name=name]').val();
        var company = $('#own_mat input[name=company]').val();
        var phone = $('#own_mat input[name=phone]').val();
        var sector = $('#own_mat select[name=sector]').val();
        var sector_name = $('#own_mat option[value=' + sector + ']').html();
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
        if (sector) {
            $('#own_mat select[name=sector]').parent().removeClass("error");
        } else {
            $('#own_mat select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }
        if (phone) {
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
        if (mat) {
            $('#own_mat input[name=mat]').parent().removeClass("error");
        } else {
            $('#own_mat input[name=mat]').parent().addClass("error");
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
                    "sector": sector_name,
                    "url": window.location.href
                }),
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
                    $(".popup-modal-dismiss").trigger("click");
                    $('#own_mat input[name=name]').val('');
                    $('#own_mat input[name=company]').val('');
                    $('#own_mat input[name=phone]').val('');
                    $('#own_mat input[name=email]').val('');
                    $('#own_mat input[name=mat]').val('');
                    $('#own_mat textarea[name=text]').val('');
                    $("#own_mat input[name=checkbox]").prop("checked", false);
                }
            });
        }
    });

    $(document).on("click", "#separation .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#separation input[name=sessid]').val();
        var name = $('#separation input[name=name]').val();
        var company = $('#separation input[name=company]').val();
        var phone = $('#separation input[name=phone]').val();
        var sector = $('#separation select[name=sector]').val();
        var sector_name = $('#separation option[value=' + sector + ']').html();
        var text = $('#separation textarea[name=text]').val();
        var material = $('#separation input[name=mat]').val();
        var email = $('#separation input[name=email]').val();

        var agree = '';
        agree = $('#separation input[name=checkbox]:checked').val();
        if (agree != 'y') {
            mist = mist + 1;
            $('#separation input[name=checkbox]').parent().addClass("error");
        } else {
            $('#separation input[name=checkbox]').parent().removeClass("error");
        }
        if (sector) {
            $('#separation select[name=sector]').parent().removeClass("error");
        } else {
            $('#separation select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }

        if (phone) {
            $('#separation input[name=phone]').parent().removeClass("error");
        } else {
            $('#separation input[name=phone]').parent().addClass("error");
            mist = mist + 1;
        }

        if (material) {
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
                    "material": material,
                    "sector": sector_name,
                    "text": text,
                    "url": window.location.href
                }),
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
                    $(".popup-modal-dismiss").trigger("click");
                    $('#separation input[name=name]').val('');
                    $('#separation input[name=company]').val('');
                    $('#separation input[name=phone]').val('');
                    $('#separation input[name=email]').val('');
                    $('#separation input[name=mat]').val('');
                    $('#separation textarea[name=text]').val('');
                    $("#separation input[name=checkbox]").prop("checked", false);
                }
            });

        }
    });

    $(document).on("click", "#dow_lleaflet .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#dow_lleaflet input[name=sessid]').val();
        var name = $('#dow_lleaflet input[name=name]').val();
        var company = $('#dow_lleaflet input[name=company]').val();
        var phone = $('#dow_lleaflet input[name=phone]').val();
        var sector = $('#dow_lleaflet select[name=sector]').val();
        var sector_name = $('#dow_lleaflet option[value=' + sector + ']').html();
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
        if (sector) {
            $('#dow_lleaflet select[name=sector]').parent().removeClass("error");
        } else {
            $('#dow_lleaflet select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }

        if (phone) {
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
                    "sector": sector_name,
                    "text": text,
                    "url": window.location.href
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
                }
            });
        }
    });

    $(document).on("click", "#dow_catalog .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#dow_catalog input[name=sessid]').val();
        var name = $('#dow_catalog input[name=name]').val();
        var company = $('#dow_catalog input[name=company]').val();
        var phone = $('#dow_catalog input[name=phone]').val();
        var sector = $('#dow_catalog select[name=sector]').val();
        var sector_name = $('#dow_catalog option[value=' + sector + ']').html();
        var text = $('#dow_catalog textarea[name=text]').val();
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
        if (sector) {
            $('#dow_catalog select[name=sector]').parent().removeClass("error");
        } else {
            $('#dow_catalog select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }

        if (phone) {
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
                    "sector": sector_name,
                    "catalog": catalog,
                    "text": text,
                    "url": window.location.href
                }),
                success: function (msg) {
                    window.open(msg.file, 'width=640,height=480');
                    $(".popup-modal-dismiss").trigger("click");
                    $('#dow_catalog input[name=name]').val('');
                    $('#dow_catalog input[name=company]').val('');
                    $('#dow_catalog input[name=phone]').val('');
                    $('#dow_catalog input[name=email]').val('');
                    $('#dow_catalog textarea[name=text]').val('');
                    $("#dow_catalog input[name=checkbox]").prop("checked", false);
                }
            });

        }
    });

    $(document).on("click", "#dow_quest .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#dow_quest input[name=sessid]').val();
        var name = $('#dow_quest input[name=name]').val();
        var company = $('#dow_quest input[name=company]').val();
        var phone = $('#dow_quest input[name=phone]').val();
        var sector = $('#dow_quest select[name=sector]').val();
        var sector_name = $('#dow_quest option[value=' + sector + ']').html();
        var text = $('#dow_quest textarea[name=text]').val();
        var email = $('#dow_quest input[name=email]').val();
        var quest = $('[data-type=quest]').attr('data-value');

        var agree = '';
        agree = $('#dow_quest input[name=checkbox]:checked').val();
        if (agree != 'y') {
            mist = mist + 1;
            $('#dow_quest input[name=checkbox]').parent().addClass("error");
        } else {
            $('#dow_quest input[name=checkbox]').parent().removeClass("error");
        }
        if (sector) {
            $('#dow_quest select[name=sector]').parent().removeClass("error");
        } else {
            $('#dow_quest select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }

        if (phone) {
            $('#dow_quest input[name=phone]').parent().removeClass("error");
        } else {
            $('#dow_quest input[name=phone]').parent().addClass("error");
            mist = mist + 1;
        }
        if (isValidEmail(email)) {
            $('#dow_quest input[name=email]').parent().removeClass("error");
        } else {
            $('#dow_quest input[name=email]').parent().addClass("error");
            mist = mist + 1;
        }

        if (mist == 0) {
            $.ajax({
                type: "POST",
                url: "/local/templates/main/ajax/form/dow_quest.php",
                data: ({
                    "sessid": sessid,
                    "company": company,
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "sector": sector_name,
                    "quest": quest,
                    "text": text,
                    "url": window.location.href
                }),
                success: function (msg) {
                    console.log(msg);
                    window.open(msg.file, 'width=640,height=480');
                    $(".popup-modal-dismiss").trigger("click");
                    $('#dow_quest input[name=name]').val('');
                    $('#dow_quest input[name=company]').val('');
                    $('#dow_quest input[name=phone]').val('');
                    $('#dow_quest input[name=email]').val('');
                    $('#dow_quest textarea[name=text]').val('');
                    $("#dow_quest input[name=checkbox]").prop("checked", false);
                }
            });

        }
    });

    $(document).on("click", "#consult_form .send--js", function (e) {
        e.preventDefault();
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
        if (phone) {
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
        if (sector) {
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
                    "sector": sector_name,
                    "text": text,
                    "url": window.location.href
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

        }
    });

    $(document).on("click", "#price .send--js", function (e) {
        e.preventDefault();
        var mist = 0;
        var sessid = $('#price input[name=sessid]').val();
        var name = $('#price input[name=name]').val();
        var company = $('#price input[name=company]').val();
        var phone = $('#price input[name=phone]').val();
        var sector = $('#price select[name=sector]').val();
        var sector_name = $('#price option[value=' + sector + ']').html();
        var text = $('#price textarea[name=text]').val();
        var email = $('#price input[name=email]').val();

        var agree = '';
        agree = $('#price input[name=checkbox]:checked').val();
        if (agree != 'y') {
            mist = mist + 1;
            $('#price input[name=checkbox]').parent().addClass("error");
        } else {
            $('#price input[name=checkbox]').parent().removeClass("error");
        }
        if (sector) {
            $('#price select[name=sector]').parent().removeClass("error");
        } else {
            $('#price select[name=sector]').parent().addClass("error");
            mist = mist + 1;
        }

        if (phone) {
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
                    "sector": sector_name,
                    "text": text,
                    "url": window.location.href
                }),
                success: function (msg) {
                    console.log(msg);
                    $(".popup-modal-dismiss").trigger("click");
                    $('#price input[name=name]').val('');
                    $('#price input[name=company]').val('');
                    $('#price input[name=phone]').val('');
                    $('#price input[name=email]').val('');
                    $('#price input[name=mat]').val('');
                    $('#price textarea[name=text]').val('');
                    $("#price input[name=checkbox]").prop("checked", false);
                }
            });

        }
    });



    $(document).on("submit", "#send_form", function (e) {
        e.preventDefault();
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
    });




}

function filter() {
    $(document).on('submit', '#filter', function (e) {
        e.preventDefault();
        if ($(this).attr('data-type') == 'catalog') {
            let url = window.location.pathname,
                page = $('input[name=page]').val(),
                more = $('input[name=page]').attr('data-more'),
                app_fields = [],
                type = [],
                material = [],
                technology = [];

            $('#filter input[name=app_fields]:checked').each(function () {
                app_fields[app_fields.length] = $(this).val();
            });
            $('#filter input[name=type]:checked').each(function () {
                type[type.length] = $(this).val();
            });
            $('#filter input[name=material]:checked').each(function () {
                material[material.length] = $(this).val();
            });
            $('#filter input[name=technology]:checked').each(function () {
                technology[technology.length] = $(this).val();
            });

            $.ajax({
                type: 'POST',
                url: url,
                data: ({
                    'ajax_catalog': true,
                    'more': more,
                    'page': page,
                    'app_fields': app_fields,
                    'type': type,
                    'material': material,
                    'technology': technology,
                }),
                success: function (a) {
                    if (more == 1) {
                        $('#catalog_body').append(a);
                    } else {
                        $('#catalog_body').html(a);
                    }
                    let pagenavigation = $('#catalog_body .pagenavigation');
                    $('#catalog_body .pagenavigation').remove();
                    $('#pagenavigation').html('');
                    $('#pagenavigation').html(pagenavigation);
                    $('html,body').animate({
                        scrollTop: $("#catalog_body").offset().top
                    }, 'fast');
                }
            });

            $.ajax({
                type: 'POST',
                url: url,
                data: ({
                    'ajax_filter': true,
                    'app_fields': app_fields,
                    'type': type,
                    'material': material,
                    'technology': technology,
                }),
                success: function (a) {
                    $('#filter_body').html(a);
                }
            });
        }
        if ($(this).attr('data-type') == 'news') {
            let url = window.location.pathname,
                page = $('input[name=page]').val(),
                more = $('input[name=page]').attr('data-more');

            $.ajax({
                type: 'POST',
                url: url,
                data: ({
                    'ajax': true,
                    'more': more,
                    'page': page,
                }),
                success: function (a) {
                    if (more == 1) {
                        $('#news_body .pagenavigation').remove();
                        $('#news_body').append(a);
                    } else {
                        $('#news_body').html(a);
                    }
                    $('html,body').animate({
                        scrollTop: $("#news_body").offset().top
                    }, 'fast');
                }
            });
        }
    });

    $(document).on('click', '[data-type=js-page-url]', function (e) {
        e.preventDefault();
        let page = $(this).attr('href');
        $('input[name=page]').val(page);
        $('#filter').submit();
    });

    $(document).on('click', '[data-type=js-page-more]', function (e) {
        e.preventDefault();
        let page = $(this).attr('href');
        $('input[name=page]').val(page).attr('data-more', 1);
        $('#filter').submit();
    });
}

forms();
filter();

function config() {
    $(document).on('submit', '#config', function (e) {
        e.preventDefault();
        let url = window.location.pathname,
            app_field = $('input[name=app_fields]:checked').val(),
            material = $('input[name=material]:checked').val();

        $.ajax({
            type: 'POST',
            url: url,
            data: ({
                'ajax_material': true,
                'app_field': app_field,
            }),
            success: function (a) {
                $('#material_body').html(a);
                $('#material_body .popup-modal').magnificPopup({
                  type: 'inline',
                  removalDelay: 1300,
                  mainClass: 'my-mfp-zoom-in',
                  showCloseBtn: false,
                  fixedContentPos: true,
                });
            }
        });

        $.ajax({
            type: 'POST',
            url: url,
            data: ({
                'ajax_count': true,
                'app_field': app_field,
                'material': material,
            }),
            success: function (a) {
                $('#count_body').html(a);
            }
        });

        $.ajax({
            type: 'POST',
            url: url,
            data: ({
                'ajax_catalog': true,
                'app_field': app_field,
                'material': material,
            }),
            success: function (a) {
                $('#catalog_body').html(a);
            }
        });
    });
}

config();

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
