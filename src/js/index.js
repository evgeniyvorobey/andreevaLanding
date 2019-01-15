
var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('.dropdown-header');

var fogging = document.querySelector('.fogging');

var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('hamburger-active');
    fogging.classList.remove('fogging-active');
})

hamburger.addEventListener('click', () => {
        nav.classList.add('active');
        hamburger.classList.add('hamburger-active');
        fogging.classList.add('fogging-active');
})

fogging.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('hamburger-active');
    fogging.classList.remove('fogging-active');
})

window.onload = function() {
    function run() {
        document.querySelector('.services-block').classList.add('motion')
    }
    setTimeout(run, 1500)
}

var swiper = new Swiper('.swiper-patient-slider', {
    slidesPerView: 4,
    breakpoints: {
        400: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 400,
    spaceBetween: 10
  });