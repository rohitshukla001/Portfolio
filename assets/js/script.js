/**
 * Portfolio Website - Consolidated JavaScript
 * Author: Rohit Shukla
 * Description: All custom scripts for portfolio functionality
 * 
 * Contents:
 * 1. Navbar Scroll Effect
 * 2. Bootstrap Tooltips
 * 3. Swiper Carousel Initialization
 */

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT
   Adds shadow to navbar when scrolling down
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
   2. BOOTSTRAP TOOLTIPS INITIALIZATION
   ========================================================================== */

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* ==========================================================================
   3. SWIPER CAROUSEL INITIALIZATION
   ========================================================================== */

// Projects Section Swiper
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

// Certificates Section Swiper
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
