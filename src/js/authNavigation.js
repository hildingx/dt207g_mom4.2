//Element att visa eller dölja beroende på om giltig token finns eller ej.
document.addEventListener('DOMContentLoaded', checkToken);

async function checkToken() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        handleAuthLinks(false);
        return;
    }

    try {
        const response = await fetch('https://dt207g-mom4-1.onrender.com/api/protected', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        //Hantera UI baserat på svaret
        if (!response.ok) {
            localStorage.removeItem('authToken');
            handleAuthLinks(false);
        } else {
            handleAuthLinks(true);
        }
    } catch (error) {
        console.error('Failed to check token', error);
        handleAuthLinks(false);
    }
}

//Hantera visning av länkar baserat på autentiseringsstatus
function handleAuthLinks(isAuthenticated) {
    const navLinks = {
        homeLink: document.getElementById('homeLink'),
        loginLink: document.getElementById('loginLink'),
        registerLink: document.getElementById('registerLink'),
        protectedLink: document.getElementById('protectedLink')
    };
    const logoutButton = document.querySelector('.logout-btn-corner');

    if (isAuthenticated) {
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
}

//Omedelbar uppdatering av UI innan verifiering är gjord.
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