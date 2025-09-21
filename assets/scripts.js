// Smooth scroll for CTA
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
}

// Fade-in animation for sections
const fadeEls = document.querySelectorAll('.fade-in, section');
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => {
  el.classList.add('fade-in');
  fadeInObserver.observe(el);
});

// Contact form basic validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting SiteSpark! We will get back to you soon.');
    contactForm.reset();
  });
}
