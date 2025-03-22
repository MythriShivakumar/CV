// Scroll animations for sections
const revealElements = document.querySelectorAll('.reveal-text');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Skills animation
const skillsItems = document.querySelectorAll('.skills-item');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

skillsItems.forEach(item => skillsObserver.observe(item));

// Smooth scrolling and active nav
const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('.section');
const sidebar = document.querySelector('.sidebar');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Ensure sidebar visibility on mobile
    if (window.innerWidth <= 768) {
        if (scrollY > 50) {
            sidebar.classList.add('active');
        } else {
            sidebar.classList.remove('active');
        }
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
});