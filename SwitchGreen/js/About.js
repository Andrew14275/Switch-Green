// About Page JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // CONTACT FORM SUBMISSION
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;

        // Validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Message Sent ✓';
            
            // Log the submission (in production, this would send to a server)
            console.log('Contact Form Submission:', {
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date().toISOString()
            });

            // Reset form
            contactForm.reset();

            // Show success message
            alert(`Thank you, ${name}!\n\nYour message has been received. We'll get back to you soon at ${email}.`);

            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // SCROLL ANIMATIONS
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

    // Animate feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate source cards
    document.querySelectorAll('.source-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate team cards
    document.querySelectorAll('.team-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });

    // Animate tech items
    document.querySelectorAll('.tech-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // TEAM CARD HOVER EFFECT
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.team-avatar').style.transform = 'rotate(360deg)';
            this.querySelector('.team-avatar').style.transition = 'transform 0.6s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.team-avatar').style.transform = 'rotate(0deg)';
        });
    });

    // SMOOTH SCROLL FOR FOOTER LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // DETAIL BOX CLICK TO EXPAND (Optional Enhancement)
    document.querySelectorAll('.detail-box').forEach(box => {
        box.addEventListener('click', function() {
            this.style.background = '#d1fae5';
            setTimeout(() => {
                this.style.background = 'white';
            }, 300);
        });
    });

    // LOG PAGE LOAD
    console.log('About Page Loaded Successfully');
    console.log('SwitchGreen Energy Portal v1.0');
    console.log('Developed by: Group 3 - Computer Engineering');

    // EASTER EGG: Konami Code
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-8);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            document.body.style.animation = 'rainbow 3s linear infinite';
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 3000);
            
            console.log('🎉 Easter Egg Activated! You found the secret!');
        }
    });
});
