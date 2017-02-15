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
        prevText:'<i class="fa fa-chevron-left"></i>',
        minSlides: 2,
        maxSlides: 2,
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false,
        slideWidth: 480
    });
    //Слайдер для отзывов________________________________________________________________________________________
    $('#testimonials__slider').bxSlider({
        nextSelector: '#testimonials__slider-next',
        prevSelector: '#testimonials__slider-prev',
        nextText: '<i class="fa fa-chevron-right"></i>',
        prevText:'<i class="fa fa-chevron-left"></i>',
        minSlides: 2,
        maxSlides: 2,
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false,
        slideWidth: 480
    });
    $( "#header__change-language" ).selectmenu();
});
