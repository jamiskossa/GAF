// Slideshow Automation
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
document.addEventListener('DOMContentLoaded', showSlides);

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation Example
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message. Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}

// scripts.js
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
