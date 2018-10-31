$(document).ready(function () {

    if ($('body').find('#caleandar').length > 0) {
        var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        var events = [
            // Exemplo
            // {'Date': new Date(2018, 9, 1), 'Modificator': 'important', 'Title': 'Nome do Feriado (Data Importante)', 'Month': months[9]},
            // {'Date': new Date(2018, 9, 2), 'Modificator': 'holiday', 'Title': 'Nome do Feriado (Feriado Nacional)', 'Month': months[9]},
            // {'Date': new Date(2018, 9, 3), 'Modificator': 'star', 'Title': 'Nome do Feriado (Data em Destaque)', 'Month': months[9]},
            // Fim exemplo

            // Janeiro
            {'Date': new Date(2019, 0, 1), 'Modificator': 'holiday', 'Title': 'Dia mundial da paz', 'Month': months[0]},
            {'Date': new Date(2019, 0, 20), 'Modificator': 'important', 'Title': 'Dia do farmacêutico', 'Month': months[0]},
            {'Date': new Date(2019, 0, 28), 'Modificator': 'important', 'Title': 'Dia Nacional de Combate e Prevenção da Hanseníase', 'Month': months[0]},

            // Fevereiro
            {'Date': new Date(2019, 1, 1), 'Modificator': 'star', 'Title': 'Campanha de Gripe', 'Month': months[1]},
            {'Date': new Date(2019, 1, 4), 'Modificator': 'important', 'Title': 'Dia Mundial do Câncer', 'Month': months[1]},
            {'Date': new Date(2019, 1, 11), 'Modificator': 'important', 'Title': 'Dia Mundial do Enfermo', 'Month': months[1]},
            {'Date': new Date(2019, 1, 15), 'Modificator': 'important', 'Title': 'Dia Internacional de Luta contra o Câncer na Infância', 'Month': months[1]},

            // Março
            {'Date': new Date(2019, 2, 5), 'Modificator': 'holiday', 'Title': 'Carnaval', 'Month': months[2]},
            {'Date': new Date(2019, 2, 8), 'Modificator': 'important', 'Title': 'Dia Internacional da Mulher', 'Month': months[2]},
            {'Date': new Date(2019, 2, 20), 'Modificator': 'important', 'Title': 'Início do Outono', 'Month': months[2]},
            {'Date': new Date(2019, 2, 21), 'Modificator': 'important', 'Title': 'Dia Internacional da Síndrome de Down', 'Month': months[2]},
            {'Date': new Date(2019, 2, 22), 'Modificator': 'important', 'Title': 'Dia Mundial da Água', 'Month': months[2]},
            {'Date': new Date(2019, 2, 31), 'Modificator': 'important', 'Title': 'Dia da Saúde e Nutrição', 'Month': months[2]},

            // Abril
            {'Date': new Date(2019, 3, 1), 'Modificator': 'important', 'Title': 'Início Campanha Gripe', 'Month': months[3]},
            {'Date': new Date(2019, 3, 2), 'Modificator': 'important', 'Title': 'Dia Mundial de Conscientização do Autismo', 'Month': months[3]},
            {'Date': new Date(2019, 3, 4), 'Modificator': 'important', 'Title': 'Dia Nacional do Parkinsoniano', 'Month': months[3]},
            {'Date': new Date(2019, 3, 7), 'Modificator': 'important', 'Title': 'Dia Mundial da Saúde', 'Month': months[3]},
            {'Date': new Date(2019, 3, 11), 'Modificator': 'important', 'Title': 'Dia do Infectologista', 'Month': months[3]},
            {'Date': new Date(2019, 3, 13), 'Modificator': 'important', 'Title': 'Dia do Jovem', 'Month': months[3]},
            {'Date': new Date(2019, 3, 21), 'Modificator': 'holiday', 'Title': 'Páscoa', 'Month': months[3]},
            {'Date': new Date(2019, 3, 24), 'Modificator': 'star', 'Title': 'Dia mundial da meningite', 'Month': months[3]},

            //Maio
            {'Date': new Date(2019, 4, 1), 'Modificator': 'holiday', 'Title': 'Dia do Trabalho/ Campanha Gripe', 'Month': months[4]},
            {'Date': new Date(2019, 4, 8), 'Modificator': 'important', 'Title': 'Dia Internacional da Cruz Vermelha', 'Month': months[4]},
            {'Date': new Date(2019, 4, 12), 'Modificator': 'holiday', 'Title': 'Dia da Enfermagem/ Dia das Mães', 'Month': months[4]},
            {'Date': new Date(2019, 4, 13), 'Modificator': 'important', 'Title': 'Dia do Combate Mundial a Influenza', 'Month': months[4]},
            {'Date': new Date(2019, 4, 15), 'Modificator': 'important', 'Title': 'Dia Internacional da Família', 'Month': months[4]},
            {'Date': new Date(2019, 4, 31), 'Modificator': 'important', 'Title': 'Dia Mundial sem Tabaco/ Término Campanha Gripe', 'Month': months[4]},

            // Junho
            {'Date': new Date(2019, 5, 5), 'Modificator': 'important', 'Title': 'Dia Mundial do Meio Ambiente/ Início da Campanha de catapora', 'Month': months[5]},
            {'Date': new Date(2019, 5, 9), 'Modificator': 'star', 'Title': 'Dia mundial da imunização', 'Month': months[5]},
            {'Date': new Date(2019, 5, 12), 'Modificator': 'important', 'Title': 'Dia dos Namorados', 'Month': months[5]},
            {'Date': new Date(2019, 5, 21), 'Modificator': 'important', 'Title': 'Início do Inverno', 'Month': months[5]},

            // Julho
            {'Date': new Date(2019, 6, 1), 'Modificator': 'important', 'Title': 'Dia da Vacina BCG/ Campanha de catapora', 'Month': months[6]},
            {'Date': new Date(2019, 6, 2), 'Modificator': 'important', 'Title': 'Dia do Hospital', 'Month': months[6]},
            {'Date': new Date(2019, 6, 20), 'Modificator': 'important', 'Title': 'Dia do Amigo', 'Month': months[6]},
            {'Date': new Date(2019, 6, 26), 'Modificator': 'important', 'Title': 'Dia dos Avós', 'Month': months[6]},
            {'Date': new Date(2019, 6, 27), 'Modificator': 'important', 'Title': ' Dia do Pediatra', 'Month': months[6]},
            {'Date': new Date(2019, 6, 28), 'Modificator': 'star', 'Title': 'Dia Mundial de Luta Contra as Hepatites Virais', 'Month': months[6]},

            // Agosto
            {'Date': new Date(2019, 7, 5), 'Modificator': 'important', 'Title': 'Dia da Farmácia', 'Month': months[7]},
            {'Date': new Date(2019, 7, 11), 'Modificator': 'important', 'Title': 'Dias dos Pais', 'Month': months[7]},
            {'Date': new Date(2019, 7, 24), 'Modificator': 'important', 'Title': 'Dia da Infância', 'Month': months[7]},
            {'Date': new Date(2019, 7, 29), 'Modificator': 'important', 'Title': 'Dia Nacional de Combate ao Fumo/ Fim da Campanha de catapora', 'Month': months[7]},

            // Setembro
            {'Date': new Date(2019, 8, 5), 'Modificator': 'important', 'Title': 'Dia do Oficial de Farmácia', 'Month': months[8]},
            {'Date': new Date(2019, 8, 8), 'Modificator': 'important', 'Title': 'Dia Nacional de Luta por Medicamento', 'Month': months[8]},
            {'Date': new Date(2019, 8, 21), 'Modificator': 'important', 'Title': 'Dia da Luta Nacional das Pessoas com Deficiências', 'Month': months[8]},
            {'Date': new Date(2019, 8, 23), 'Modificator': 'star', 'Title': 'Início da Campanha de Catapora', 'Month': months[8]},
            {'Date': new Date(2019, 8, 27), 'Modificator': 'important', 'Title': 'Dia Nacional de Doação de Órgãos', 'Month': months[8]},
            {'Date': new Date(2019, 8, 29), 'Modificator': 'important', 'Title': 'Dia Mundial do Coração', 'Month': months[8]},

            // Outubro
            {'Date': new Date(2019, 9, 1), 'Modificator': 'important', 'Title': 'Dia do Idoso/Dia Internacional da Terceira Idade', 'Month': months[9]},
            {'Date': new Date(2019, 9, 4), 'Modificator': 'important', 'Title': 'Dia Nacional do Agente Comunitário de Saúde', 'Month': months[9]},
            {'Date': new Date(2019, 9, 10), 'Modificator': 'important', 'Title': 'Dia Mundial da Saúde Mental', 'Month': months[9]},
            {'Date': new Date(2019, 9, 11), 'Modificator': 'important', 'Title': 'Dia Internacional da Menina', 'Month': months[9]},
            {'Date': new Date(2019, 9, 12), 'Modificator': 'holiday', 'Title': 'Dia das Crianças', 'Month': months[9]},
            {'Date': new Date(2019, 9, 17), 'Modificator': 'important', 'Title': 'Dia Nacional da Vacinação', 'Month': months[9]},
            {'Date': new Date(2019, 9, 18), 'Modificator': 'important', 'Title': 'Dia do Médico', 'Month': months[9]},
            {'Date': new Date(2019, 9, 24), 'Modificator': 'important', 'Title': 'Dia Mundial de Combate à Poliomielite', 'Month': months[9]},

            // Novembro
            {'Date': new Date(2019, 10, 12), 'Modificator': 'star', 'Title': 'Dia mundial do combate a pneumonia', 'Month': months[10]},
            {'Date': new Date(2019, 10, 14), 'Modificator': 'important', 'Title': 'Dia mundial do Diabetes', 'Month': months[10]},
            {'Date': new Date(2019, 10, 20), 'Modificator': 'important', 'Title': 'Dia do Biomédico', 'Month': months[10]},
            {'Date': new Date(2019, 10, 23), 'Modificator': 'important', 'Title': 'Dia Nacional de Combate ao Câncer Infantil', 'Month': months[10]},
            {'Date': new Date(2019, 10, 25), 'Modificator': 'important', 'Title': 'Dia Nacional do Doador de Sangue', 'Month': months[10]},

            //Dezembro
            {'Date': new Date(2019, 11, 1), 'Modificator': 'important', 'Title': 'Dia Mundial de Luta Contra a Aids', 'Month': months[11]},
            {'Date': new Date(2019, 11, 3), 'Modificator': 'important', 'Title': 'Dia Internacional do Portador de Deficiência', 'Month': months[11]},
            {'Date': new Date(2019, 11, 9), 'Modificator': 'important', 'Title': 'Dia da Criança Especial', 'Month': months[11]},
            {'Date': new Date(2019, 11, 21), 'Modificator': 'important', 'Title': 'Início do Verão', 'Month': months[11]},
            {'Date': new Date(2019, 11, 25), 'Modificator': 'holiday', 'Title': 'Natal', 'Month': months[11]},
            {'Date': new Date(2019, 11, 31), 'Modificator': 'holiday', 'Title': 'Réveillon', 'Month': months[11]},
        ];
        var settings = {};
        var element = document.getElementById('caleandar');
        caleandar(element, events, settings);
    }

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
            $('#caleandar').addClass('list_days');
            $('.item_calendar .wrap').addClass('full');
        }
        else {
            $('#caleandar').removeClass('list_days');
            $('.item_calendar .wrap').removeClass('full');
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

    function myCustomFn(el) {
        var height_target = $('.mCSB_container').height();
        if (el.mcs.topPct == 100) {
            $(el).mCustomScrollbar('scrollTo', '0%');
            $(el).mCustomScrollbar("destroy");
            $('.cld-fwd').trigger('click');
            console.log('123');
            $(el).mCustomScrollbar({
                scrollInertia: 100,
                updateOnContentResize: false,
                updateOnImageLoad: false,
                callbacks: {
                    onScroll: function () {
                        myCustomFn(this);
                    }
                }
            });
        }
        else if (el.mcs.topPct == 0) {
            $(el).mCustomScrollbar('scrollTo', '100%');
            $(el).mCustomScrollbar("destroy");
            $('.cld-rwd').trigger('click');
            $(el).mCustomScrollbar({
                scrollInertia: 100,
                updateOnContentResize: false,
                updateOnImageLoad: false,
                callbacks: {
                    onScroll: function () {
                        myCustomFn(this);
                    }
                }
            });
        }
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
});