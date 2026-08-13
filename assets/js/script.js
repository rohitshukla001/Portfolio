(function () {
    emailjs.init("dnQ7CtoblL4arIed7");
})();

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

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
        pauseOnMouseEnter: true,
    },
});

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
        pauseOnMouseEnter: true,
    },
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('formMessage');
    const originalBtnText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.innerHTML = '';

    const currentDate = new Date().toLocaleString();

    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value,
        submission_date: currentDate
    };

    emailjs.send("rohitvendasta@gmail.com", "template_euenjja", formData)
        .then(function (response) {
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            let countdown = 10;
            formMessage.innerHTML = '<span class="form-message-success">✓ Message sent successfully! I\'ll get back to you soon. <span id="countdown">(' + countdown + 's)</span></span>';

            const countdownInterval = setInterval(function() {
                countdown--;
                const countdownEl = document.getElementById('countdown');
                if (countdown > 0 && countdownEl) {
                    countdownEl.textContent = '(' + countdown + 's)';
                } else {
                    clearInterval(countdownInterval);
                    formMessage.innerHTML = '';
                }
            }, 1000);

        }, function (error) {
            formMessage.innerHTML = '<span class="form-message-error">✗ Failed to send message. Please try again or email me directly.</span>';
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            console.error('EmailJS Error:', error);
        });
});

document.getElementById('copyrightYear').textContent = String(new Date().getFullYear()).slice(-2);

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView();
        }
    });
});
