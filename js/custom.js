$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
<!-- Initialize material-scrolltop-->

$('body').materialScrollTop();

<!-- Initialize WOW JS-->
new WOW().init();

<!-- Initialize Tooltip JS-->
$(document).ready(function () {
    $('.tooltipstered').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        side: 'bottom'
    });
});
