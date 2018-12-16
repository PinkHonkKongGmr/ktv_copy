
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


var recSlidesLi = $('.recMenu li');

// for (rec of recSlidesLi) {
//
//   $(this).onclick=function () {
//
//     console.log('hhd');
//
//     if($(this).hasClass('activeLi'))
//     {console.log('yes');}
//
//   }
//
// }

recSlidesLi.each(){
    function () {
  $(this).onclick=function () {
    console.log('aaa');
  }
 }
}
