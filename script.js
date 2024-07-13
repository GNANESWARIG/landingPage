// Smooth scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }

    // Highlight active menu item
    const sections = document.querySelectorAll('section');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (
            scrollPosition >= section.offsetTop - navbar.offsetHeight &&
            scrollPosition < section.offsetTop + section.offsetHeight - navbar.offsetHeight
        ) {
            document.querySelectorAll('.nav-item a').forEach(a => a.classList.remove('active'));
            document.querySelector(`.nav-item a[href="#${section.id}"]`).classList.add('active');
        }
    });
});

// Hamburger menu toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
