$( document ).ready(function() {
    $(".icon").addClass('is-ready');
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    mobile: {
       smooth: false
   },
   tablet: {
       smooth: false
   },
    multiplier: 1,
    class: "is-inview",
});
