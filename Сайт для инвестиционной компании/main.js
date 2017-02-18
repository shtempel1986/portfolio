/**
 * Created by Павел on 14.02.2017.
 */
$(function () {
    // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
    $('[data-toggle="tooltip"]').tooltip();
    //Слайдер для новостей______________________________________________________________________________________
    $('#news__slider').bxSlider({
        nextSelector: '#news__slider-next',
        prevSelector: '#news__slider-prev',
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        minSlides: 2,
        maxSlides: 2,
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false,
        slideWidth: 480
    });
    //Слайдер для отзывов_______________________________________________________________________________________
    $('#testimonials__slider').bxSlider({
        nextSelector: '#testimonials__slider-next',
        prevSelector: '#testimonials__slider-prev',
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText: '<i class="fa fa-chevron-left"></i>',
        minSlides: 2,
        maxSlides: 2,
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false,
        slideWidth: 300
    });

    // Плавный переход__________________________________________________________________________________________
    $("#section-invest__link").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });
    //Значение select при загрузке страницы_____________________________________________________________________
    // if (document.location.){
    //
    // }
    //Select____________________________________________________________________________________________________
    $('#header__change-language').styler({
        onSelectClosed: function () {
            //смена языка_______________________________________________________________________________________________
            if ($('li.english').hasClass('sel')){
                document.location.href = 'index.html';
            } else if ($('li.russian').hasClass('sel')){
                document.location.href = 'Ru.html';
            }
        }
    });
});
