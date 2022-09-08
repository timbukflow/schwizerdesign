$( document ).ready(function() {
    $(".icon").addClass('is-ready');
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: false,
    multiplier: 1,
    class: "is-inview",
});
