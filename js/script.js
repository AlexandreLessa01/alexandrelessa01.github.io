/*========== menu icon navbar ==========*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/*========== scroll sections active link + sticky navbar ==========*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

/*========== swiper ==========*/
if (document.querySelector('.mySwiper')) {
    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/*========== scroll reveal ==========*/
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '70px',
        duration: 1800,
        delay: 150,
        reset: false
    });

    ScrollReveal().reveal('.home-brand, .heading', { origin: 'left' });
    ScrollReveal().reveal('.home-content, .about-content, .contact form', { origin: 'right' });
    ScrollReveal().reveal('.services-box, .portfolio-box, .testimonial-wrapper', { origin: 'bottom', interval: 120 });
    ScrollReveal().reveal('.about-img img', { origin: 'left' });
}
