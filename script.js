document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu
    const menuBtn = document.querySelector('#mobile-toggle');
    const nav = document.querySelector('#nav-links');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Handle icon swap
            const icon = menuBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // 2. Form Logic
    const form = document.querySelector('#contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            // Loading state
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';

            // Fake API delay
            setTimeout(() => {
                console.log('Form submitted successfully'); // Debug log
                
                btn.innerText = 'Message Sent!';
                btn.style.backgroundColor = '#A3B18A'; 
                btn.style.opacity = '1';

                form.reset();

                // Reset button after delay
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);

            }, 1500);
        });
    }
});