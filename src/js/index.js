
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

document.querySelectorAll('.header-list-link').forEach(item => {
    item.addEventListener('click', function() {
        nav.classList.remove('active');
        hamburger.classList.remove('hamburger-active');
        fogging.classList.remove('fogging-active');
    })
})

window.onload = function () {
    function run() {
        document.querySelector('.services-block').classList.add('motion')
    }
    setTimeout(run, 1700)
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


const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 400,
    framesCount = 60;

document.querySelectorAll('a[href*="#"]').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

        let scroller = setInterval(function () {
            let scrollBy = coordY / framesCount;

            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
});


document.addEventListener('scroll', function() {
    var vievportHeight = window.innerHeight; // высота окна браузера
    var el = document.querySelector('.price');
    var el = el.getBoundingClientRect(); 

    if(window.innerWidth < 768) {
        if(window.scrollY >= 350){
            document.querySelector('.header-navigation-block').classList.add('scroled-header');
        } else{
            document.querySelector('.header-navigation-block').classList.remove('scroled-header')
        }
    }else {
        if(window.scrollY >= 500){
            document.querySelector('.header-navigation-block').classList.add('scroled-header');
        } else{
            document.querySelector('.header-navigation-block').classList.remove('scroled-header')
        }
    }

    if ((el.top + 250) <= vievportHeight ) {
        document.querySelector('.block-with-price').classList.add('move');
    }else{
        document.querySelector('.block-with-price').classList.remove('move');
    }
})
