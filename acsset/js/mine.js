
AOS.init();

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll',function (){
  let navbar = document.querySelector('nav');
  if(this.window.pageYOffset > 0){
      navbar.classList.add('sticky_nav');
  }
  else{
      navbar.classList.remove('sticky_nav');
    }
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});

