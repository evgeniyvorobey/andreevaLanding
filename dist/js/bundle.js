!function(e){var t={};function r(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(o,c,function(t){return e[t]}.bind(null,c));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,r){var o=document.querySelector(".hamburger"),c=document.querySelector(".dropdown-header"),i=document.querySelector(".fogging");document.querySelector(".close-button").addEventListener("click",function(){c.classList.remove("active"),o.classList.remove("hamburger-active"),i.classList.remove("fogging-active")}),o.addEventListener("click",function(){c.classList.add("active"),o.classList.add("hamburger-active"),i.classList.add("fogging-active")}),i.addEventListener("click",function(){c.classList.remove("active"),o.classList.remove("hamburger-active"),i.classList.remove("fogging-active")}),document.querySelectorAll(".header-list-link").forEach(function(e){e.addEventListener("click",function(){c.classList.remove("active"),o.classList.remove("hamburger-active"),i.classList.remove("fogging-active")})}),closeAllSlider=function(){document.querySelectorAll(".patient-slider div").forEach(function(e){e.classList.remove("active")}),document.querySelectorAll(".list-category-works li").forEach(function(e){e.classList.remove("work-item-active")})},document.querySelectorAll(".header-category-link").forEach(function(e){e.addEventListener("click",function(){closeAllSlider();var e=".".concat(this.getAttribute("current-block")),t='.list-category-works [current-block="'.concat(this.getAttribute("current-block"),'"]');document.querySelector(t).classList.add("work-item-active"),document.querySelector(e).classList.add("active"),c.classList.remove("active"),o.classList.remove("hamburger-active"),i.classList.remove("fogging-active"),document.querySelector(".select-work-type").classList.remove("select-work-type-active")})}),document.querySelectorAll(".list-category-works li").forEach(function(e){e.addEventListener("click",function(){closeAllSlider();var e=".".concat(this.getAttribute("current-block")),t='.list-category-works [current-block="'.concat(this.getAttribute("current-block"),'"]');document.querySelector(t).classList.add("work-item-active"),document.querySelector(e).classList.add("active")})}),window.onload=function(){setTimeout(function(){document.querySelector(".services-block").classList.add("motion")},1500)};new Swiper(".swiper-cleaning,.swiper-veneers,.swiper-restorations,.swiper-lips,.swiper-treatment,.swiper-botox,.swiper-bleaching",{slidesPerView:4,breakpoints:{400:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}},loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3500,disableOnInteraction:!1},speed:400,spaceBetween:10});var n=document.querySelectorAll('[href^="#"]'),l=.2;n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var r=window.pageYOffset,o=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(o).getBoundingClientRect().top,start=null,requestAnimationFrame(function e(c){null===start&&(start=c);var i=c-start,n=t<0?Math.max(r-i/l,r+t):Math.min(r+i/l,r+t);window.scrollTo(0,n);n!=r+t?requestAnimationFrame(e):location.hash=o})},!1)}),document.addEventListener("scroll",function(){var e=window.innerHeight,t=(t=document.querySelector(".price")).getBoundingClientRect();window.innerWidth<768?window.scrollY>=350?document.querySelector(".header-navigation-block").classList.add("scroled-header"):document.querySelector(".header-navigation-block").classList.remove("scroled-header"):window.scrollY>=500?document.querySelector(".header-navigation-block").classList.add("scroled-header"):document.querySelector(".header-navigation-block").classList.remove("scroled-header"),t.top+250<=e?document.querySelector(".block-with-price").classList.add("move"):document.querySelector(".block-with-price").classList.remove("move"),document.querySelector(".doctor").getBoundingClientRect().top+300<=e?document.querySelector(".doctor-container").classList.add("move"):document.querySelector(".doctor-container").classList.remove("move")});new LazyLoad({elements_selector:".lazy"})},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map