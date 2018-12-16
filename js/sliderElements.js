
$(document).ready(function() {
  $('.slider').bxSlider({
    auto: true,
    pager: false,
    nextSelector: $('.next0'),
    prevSelector: $('.prev0')
  });

  $('.recomend-slide').slick({
    slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2800,
   prevArrow:$('.prev1'),
   nextArrow:$('.next1')
  });


});
