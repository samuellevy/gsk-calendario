$(document).ready(function () {
    $('.mobile_buttons .login_handle').click(function (e) {
        e.preventDefault();
        $('.login_area').toggleClass('active');
        $('body').toggleClass('active');
    });
    $('form').on('submit', function (event) {

        $(this).find('input:required, select:required').each(function () {
            if ($(this).val() == '') {
                $(this).removeClass('valid');
                $(this).addClass('invalid');
            }
            else {
                $(this).removeClass('invalid');
                $(this).addClass('valid');
            }
        });
        var $input = $(this).find('.invalid');
        if ($input.length > 0) {
            event.preventDefault();
        }
        else if ($(this).hasClass('forgot_pass')) {
            $('.forgot_pass').addClass('active');
        }
        else {
            $(this).submit();
        }
    });
    $('.calendar_handle .nav a, #header li .day,#header li .month').click(function (event) {
        event.preventDefault();
        $('.calendar_handle .nav a').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('day')) {
            $('#calendar').addClass('list_days');
        }
        else {
            $('#calendar').removeClass('list_days');
        }
    });

    if ($(window).width() > 1024) {
        $('#caleandar').mCustomScrollbar({
            scrollInertia: 250,
            updateOnContentResize: false,
            updateOnImageLoad: false,
            callbacks: {
                onScroll: function () {
                    myCustomFn(this);
                }
            }
        });
        $('.list-dwn').mCustomScrollbar({
            scrollInertia: 250,
            updateOnContentResize: false,
            updateOnImageLoad: false
        });
        $('.list_calendar').mCustomScrollbar({
            scrollInertia: 250
        });
    }

    $('.nav_dates a').click(function (event) {
        event.preventDefault();
        $('.nav_dates a').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('dates_mark')) {
            $('.list_calendar').addClass('filtred');
        }
        else {
            $('.list_calendar').removeClass('filtred');
        }
    });
    $('[data-target], .lightbox .close').on('click', function (event) {
        event.preventDefault();
        var target = $(this).data('target');
        if ($(this).hasClass('close')) {
            $('.lightbox').removeClass('active');
        }
        else {
            $('#' + target).addClass('active');
        }
    });
    $('.menu_handle').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('active');
    });


    $('.select_style').append('<div class="selected"></div><ul></ul>');
    $('.select_style select option').each(function () {
        var pai = $(this).parents('.select_style'),
            ul = pai.find('ul');
        ul.append('<li rel="' + $(this).val() + '">' + $(this).text() + '</li>');
        if ($(this).attr('selected')) {
            pai.find('.selected').text($(this).text());
        }
    });

    $('.select_style li').click(function () {
        var pai = $(this).parents('.select_style'),
            select = pai.find('select');
        select.val($(this).attr('rel'));
        pai.find('.selected').text($(this).text());
        pai.find('ul').removeClass('active');
    });
    $('.select_style .selected').click(function () {
        $('.select_style ul').removeClass('active');
        $(this).parents('.select_style').find('ul').addClass('active');
    });

    $('.logar').click(function () {
       $('.error-login').css('display', 'block');
        $('.input_text').addClass('invalid');
    });
});