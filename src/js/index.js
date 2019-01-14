
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