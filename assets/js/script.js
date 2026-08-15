document.getElementById('copyrightYear').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        target.scrollIntoView();
    });
});

const hackathonVideo = document.querySelector('.responsive-video');
const mobileWidth = matchMedia('(max-width: 576px)');
const tabletWidth = matchMedia('(max-width: 991px)');

function setHackathonPoster() {
    const tier = mobileWidth.matches ? 'mobile' : tabletWidth.matches ? 'tablet' : 'desktop';
    hackathonVideo.poster = 'assets/images/hackathon-poster-' + tier + '.png';
}

setHackathonPoster();
mobileWidth.addEventListener('change', setHackathonPoster);
tabletWidth.addEventListener('change', setHackathonPoster);

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const menu = document.getElementById('navbarNav');
        if (menu.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

window.addEventListener('scroll', function () {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 10);
});

if (typeof emailjs !== 'undefined') {
    emailjs.init("dnQ7CtoblL4arIed7");
}

if (typeof Swiper !== 'undefined') {
    ['#project', '#hackathon', '#certificate'].forEach(function (id) {
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
}

let countdownInterval;

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('formMessage');
    const originalBtnText = submitBtn.textContent;

    clearInterval(countdownInterval);
    formMessage.innerHTML = '';

    if (typeof emailjs === 'undefined') {
        formMessage.innerHTML = '<span class="form-message-error">Message form is unavailable right now. Please email me directly.</span>';
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value,
        submission_date: new Date().toLocaleString()
    };

    const timeout = new Promise(function (resolve, reject) {
        setTimeout(function () { reject(new Error('Request timed out')); }, 15000);
    });

    Promise.race([emailjs.send("rohitvendasta@gmail.com", "template_euenjja", formData), timeout])
        .then(function (response) {
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            let countdown = 5;
            formMessage.innerHTML = '<span class="form-message-success">Message sent! I\'ll get back to you soon. <span id="countdown">(' + countdown + 's)</span></span>';

            countdownInterval = setInterval(function () {
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
