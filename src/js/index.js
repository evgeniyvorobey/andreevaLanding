// import LazyLoad from "vanilla-lazyload";


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

closeAllSlider = () => {
    document.querySelectorAll('.patient-slider div').forEach(item => {
        item.classList.remove('active');
    })
}

document.querySelectorAll('.header-category-link').forEach(item => {
    item.addEventListener('click', function() {
        closeAllSlider();
        var open = `.${this.getAttribute('current-block')}`;
        document.querySelector(open).classList.add('active');
        nav.classList.remove('active');
        hamburger.classList.remove('hamburger-active');
        fogging.classList.remove('fogging-active');
        document.querySelector('.select-work-type').classList.remove('select-work-type-active')
    })
})

document.querySelector('.header-list-link-dont-close').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.select-work-type').classList.toggle('select-work-type-active');
})

window.onload = function () {
    function run() {
        document.querySelector('.services-block').classList.add('motion')
    }
    setTimeout(run, 1500)
}

var swiper = new Swiper('.swiper-cleaning,.swiper-veneers,.swiper-restorations,.swiper-lips,.swiper-treatment', {
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


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .15;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
// for (var i = 0; i < linkNav.length; i++) {
    linkNav.forEach(item => {
    item.addEventListener('click', function(e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset,  // производим прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  // URL с хэшем
                }
            }
        }, false);
    })
// }

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


    var doctor = document.querySelector('.doctor').getBoundingClientRect();

    if ((doctor.top + 300) <= vievportHeight ) {
        document.querySelector('.doctor-container').classList.add('move');
    }else{
        document.querySelector('.doctor-container').classList.remove('move');
    }
})
//
// document.querySelector('.for-mouse-event').addEventListener('mouseover', () => {
//     document.querySelector('.select-work-type').classList.add('select-work-type-active');
// } )
// document.querySelector('.for-mouse-event').addEventListener('mouseout', () => {
//     document.querySelector('.select-work-type').classList.remove('select-work-type-active');
// } )

var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});


