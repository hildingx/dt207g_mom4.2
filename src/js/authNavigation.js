//Element att visa eller dölja beroende på om användare är inloggad eller ej.

document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('authToken');
    const navLinks = {
        homeLink: document.getElementById('homeLink'),
        loginLink: document.getElementById('loginLink'),
        registerLink: document.getElementById('registerLink'),
        protectedLink: document.getElementById('protectedLink')
    };
    const logoutButton = document.querySelector('.logout-btn-corner');

    if (token) {
        navLinks.loginLink.style.display = 'none';
        navLinks.registerLink.style.display = 'none';
        navLinks.protectedLink.style.display = 'block';
        if(logoutButton) {
            logoutButton.style.display = 'block';
        }
        
    } else {
        navLinks.loginLink.style.display = 'block';
        navLinks.registerLink.style.display = 'block';
        navLinks.protectedLink.style.display = 'none';
        if(logoutButton) {
            logoutButton.style.display = 'none';
        }
    }
});