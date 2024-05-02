document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('authToken');
    const navLinks = {
        homeLink: document.getElementById('homeLink'),
        loginLink: document.getElementById('loginLink'),
        registerLink: document.getElementById('registerLink'),
        protectedLink: document.getElementById('protectedLink')
    };

    if (token) {
        navLinks.loginLink.style.display = 'none';
        navLinks.registerLink.style.display = 'none';
        navLinks.protectedLink.style.display = 'block';
    } else {
        navLinks.loginLink.style.display = 'block';
        navLinks.registerLink.style.display = 'block';
        navLinks.protectedLink.style.display = 'none';
    }
});