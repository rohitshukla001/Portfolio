document.getElementById('copyrightYear').textContent = String(new Date().getFullYear()).slice(-2);

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        target.scrollIntoView();
    });
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const menu = document.getElementById('navbarNav');
        if (menu.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

emailjs.init("dnQ7CtoblL4arIed7");

window.addEventListener('scroll', function () {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 10);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

['#project', '#certificate'].forEach(function (id) {
    new Swiper(id + ' .swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: id + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: id + ' .swiper-button-next',
            prevEl: id + ' .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('formMessage');
    const originalBtnText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.innerHTML = '';

    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value,
        submission_date: new Date().toLocaleString()
    };

    emailjs.send("rohitvendasta@gmail.com", "template_euenjja", formData)
        .then(function (response) {
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            let countdown = 5;
            formMessage.innerHTML = '<span class="form-message-success">Message sent! I\'ll get back to you soon. <span id="countdown">(' + countdown + 's)</span></span>';

            const countdownInterval = setInterval(function () {
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
            formMessage.innerHTML = '<span class="form-message-error">Failed to send message. Please try again or email me directly.</span>';
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            console.error('EmailJS Error:', error);
        });
});
