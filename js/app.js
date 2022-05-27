'use strict'
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
    });
    function show (el, visibleText){
        el.click(function(){
            visibleText.slideToggle(300);
            return false;
        })
    }
    function modalWindow(open, close, window){
        $(open).click(function(){
            $(window).toggle('');
        })
        $(close).click(function(){
            $(window).toggle('');
        })
    }
    show ($('#inst'), $('#inst-name'));
    show ($('#phone'), $('#phone-number'));
    show ($('#dis'), $('#dis-name'));
    show ($('#email'), $('#email-name'));

    modalWindow($('#not-ready'),$('#close'), $('#websiteNotReady'));
})
