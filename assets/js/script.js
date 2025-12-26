/**
 * Portfolio Website - Consolidated JavaScript
 * Author: Rohit Shukla
 * Description: All custom scripts for portfolio functionality
 * 
 * Contents:
 * 1. EmailJS Initialization
 * 2. Navbar Scroll Effect
 * 3. Bootstrap Tooltips
 * 4. Swiper Carousel Initialization
 * 5. Contact Form Submission
 */

/* ==========================================================================
   1. EMAILJS INITIALIZATION
   ========================================================================== */

(function () {
    emailjs.init("dnQ7CtoblL4arIed7");
})();

/* ==========================================================================
   2. NAVBAR SCROLL EFFECT
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
   3. BOOTSTRAP TOOLTIPS INITIALIZATION
   ========================================================================== */

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* ==========================================================================
   4. SWIPER CAROUSEL INITIALIZATION
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

/* ==========================================================================
   5. CONTACT FORM SUBMISSION (EmailJS)
   ========================================================================== */

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('formMessage');
    const originalBtnText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.innerHTML = '';
    
    // Get current date for tracking
    const currentDate = new Date().toLocaleString();
    
    // Prepare form data
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value,
        submission_date: currentDate
    };

    // Send email using EmailJS
    emailjs.send("rohitvendasta@gmail.com", "template_euenjja", formData)
        .then(function (response) {
            formMessage.innerHTML = '<span style="color: #28a745; font-weight: bold;">✓ Message sent successfully! I\'ll get back to you soon.</span>';
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }, function (error) {
            formMessage.innerHTML = '<span style="color: #dc3545; font-weight: bold;">✗ Failed to send message. Please try again or email me directly.</span>';
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            console.error('EmailJS Error:', error);
        });
});
