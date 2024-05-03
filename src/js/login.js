//Logga in
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Hämta användarnamn och lösenord från formulärets inmatningsfält
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    //Element för att visa felmeddelanden
    const errorEl = document.getElementById('loginError');

    //POST-förfrågan användarnamn och lösenord 
    fetch('https://dt207g-mom4-1.onrender.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        //Kontrollera om token skapats och finns i svar
        if (data.message.token) {
            //Spara token och hantera inloggad användare
            localStorage.setItem('authToken', data.message.token);
            //Omdirigera till skyddad sida eller uppdatera UI
            window.location.href = '/protected.html';
        } else {
            //Visa felmeddelande
            errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Fel användarnamn eller lösenord';
            expAddedEl.style.display = 'block';
            form.reset();
        }
    })
    .catch(error => {
        //Visa felmeddelande
        errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Fel användarnamn eller lösenord';
            expAddedEl.style.display = 'block';
            form.reset();
    });
});