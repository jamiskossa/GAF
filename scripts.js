


// Form Validation Example
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message. Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}

