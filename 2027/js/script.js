/* =====================================================
   ICISTA 2027 WEBSITE JAVASCRIPT
   Contains:
   1. Image slider control
   2. Countdown timer
   3. Smooth scrolling
===================================================== */



/* =====================================================
   AUTOMATIC AGADIR IMAGE SLIDER

   Changes images every few seconds
===================================================== */

let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");

function changeSlide() {

    if (slides.length === 0) return;

   slides.forEach(img => img.classList.remove('active'));
   slides[currentSlide].classList.add('active');

   currentSlide--;

   if (currentSlide < 0) {
      currentSlide = slides.length - 1;
   }
}

changeSlide();
setInterval(changeSlide, 4000);





/* =====================================================
   IMPORTANT DATES COUNTDOWN

   Deadline:
   December 05, 2026
===================================================== */


const deadline =
new Date(
"December 05, 2026 23:59:59"
).getTime();



function countdown(){


let now =
new Date().getTime();


let distance =
deadline - now;



if(distance < 0){

document.getElementById("countdown")
.innerHTML =
"Submission Closed";

return;

}



let days =
Math.floor(
distance /
(1000*60*60*24)
);



let hours =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);



let minutes =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);



let seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);



if(document.getElementById("days")){

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}


}



setInterval(
countdown,
1000
);





/* =====================================================
   MOBILE MENU SUPPORT
===================================================== */


function openMenu(){

let menu =
document.querySelector("nav ul");


menu.classList.toggle("active");

}






/* =====================================================
   SMOOTH PAGE SCROLLING

   Improves user experience
===================================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(
anchor => {


anchor.addEventListener(
"click",
function(e){


e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});


});


