/**
 * Portfolio Website - Main JavaScript
 * Author: Rohit Shukla
 * Description: Custom scripts for portfolio functionality
 */

/* ==========================================================================
   NAVBAR SCROLL EFFECT
   Changes navbar appearance when scrolling
   ========================================================================== */

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ==========================================================================
   BOOTSTRAP TOOLTIPS INITIALIZATION
   ========================================================================== */

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* ==========================================================================
   SWIPER CAROUSEL INITIALIZATION
   ========================================================================== */

/**
 * Projects Section Swiper
 * Auto-plays with 5 second delay, includes navigation and pagination
 */
new Swiper('#project .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '#project .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#project .swiper-button-next',
        prevEl: '#project .swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

/**
 * Certificates Section Swiper
 * Auto-plays with 5 second delay, includes navigation and pagination
 */
new Swiper('#certificate .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '#certificate .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#certificate .swiper-button-next',
        prevEl: '#certificate .swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

