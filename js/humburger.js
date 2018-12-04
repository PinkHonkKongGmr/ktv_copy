var humburger = document.querySelectorAll('.humburger');


var line1 = document.querySelectorAll('.ln1');
var line2 = document.querySelectorAll('.ln2');
var line3 = document.querySelectorAll('.ln3');
var slidemenu = document.querySelector('.slidemenu');




for (let i = 0; i < humburger.length; i++) {
  humburger[i].addEventListener('click',function humburgerToggle() {

    line1[i].classList.toggle('cross');
    line2[i].classList.toggle('hide');
    line3[i].classList.toggle('cross2');
  slidemenu.classList.toggle('slideup');
  });
}
