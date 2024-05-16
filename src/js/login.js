//Logga in
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Hämta användarnamn och lösenord från formulärets inmatningsfält
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    //Element för att visa felmeddelanden
    const errorEl = document.getElementById('loginError');
    const form = document.getElementById('loginForm');

    //Laddningsindikator
    const loadingIndicatorEl = document.getElementById('loadingIndicator');
    //Visa laddningsindikator
    loadingIndicatorEl.style.display = 'block';

    //POST-förfrågan användarnamn och lösenord 
    fetch('https://dt207g-mom4-1.onrender.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        loadingIndicatorEl.style.display = 'none';
        if (!response.ok) {
            //Kontrollera statuskoden för att visa lämpligt felmeddelande
            if (response.status === 401) {
                errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Fel användarnamn eller lösenord';
            } else {
                errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Ett fel uppstod. Försök igen senare.';
            }
            form.reset();
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        //Kontrollera om token skapats och finns i svar
        if (data.message && data.message.token) {
            //Spara token och hantera inloggad användare
            localStorage.setItem('authToken', data.message.token);
            //Omdirigera till skyddad sida eller uppdatera UI
            window.location.href = '/protected.html';
        } else {
            //Visa felmeddelande om token saknas
            errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Fel användarnamn eller lösenord';
            form.reset();
        }
    })
    .catch(error => {
        if (error.message !== 'Login failed') {
            //Visa felmeddelande för andra fel
            errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Ett fel uppstod. Försök igen senare.';
        }
        loadingIndicatorEl.style.display = 'none';
    });
});