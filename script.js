// Mobile menu toggle with accessibility and safety checks
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    // Add click event to toggle the mobile menu
    hamburger.addEventListener('click', function() {
        const opened = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });

    // Close the menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close the menu when the Escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// WhatsApp Integration
const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with actual WhatsApp number
const whatsappMessage = encodeURIComponent("Hi, I'd like to explore African experiences");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

// Apply WhatsApp link to all WhatsApp buttons
const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
whatsappButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.open(whatsappLink, '_blank');
    });
});

// Form section toggle - show form after CTA button is pressed
const ctaButton = document.querySelector('.cta-button');
const navButton = document.querySelector('.nav-btn');
const formSection = document.querySelector('.form-section');

if (ctaButton && formSection) {
    ctaButton.addEventListener('click', function() {
        formSection.classList.add('active');
        ctaButton.style.display = 'none';
    });
}

if (navButton && formSection) {
    navButton.addEventListener('click', function(e) {
        // Only show form if we're at the CTA section
        const ctaSection = document.getElementById('cta');
        if (ctaSection) {
            setTimeout(() => {
                formSection.classList.add('active');
                if (ctaButton) {
                    ctaButton.style.display = 'none';
                }
            }, 500);
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling (optional enhancement)
const waitlistForm = document.querySelector('.waitlist-form');
if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
        // You can add custom validation or analytics here
        console.log('Form submitted');
    });
}

// Add scroll-based animations (optional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.feature-card, .step-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
