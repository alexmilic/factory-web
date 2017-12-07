$(document).ready(function () {
    $(".homepage-slides").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });

    $(".gallery-lightbox").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $("ul#navigation").slicknav({
        prependTo: ".responsive-menu-wrapper"
    });

});



$(window).load(function () {
    $(".factorian-slide-preloader-wrap, .factorian-site-preloader-wrap").fadeOut(500);
});