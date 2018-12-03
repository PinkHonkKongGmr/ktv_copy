var lowerFix=document.querySelector('.lowerFix');
var resize = document.querySelectorAll('.resize');


var smaller =[]

console.log(smaller);
for (let r of resize) {
smaller.push(r);
}


lowerFix.onclick= function () {

for (var small of smaller) {

            small.classList.toggle('pop');
    }
   }
