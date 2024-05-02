//Logga in
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('https://dt207g-mom4-1.onrender.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response data:', data);
        if (data.message.token) {
            console.log('Login successful', data.message.message);
            //Spara token och hantera inloggad användare
            localStorage.setItem('authToken', data.message.token);
            //Omdirigera till skyddad sida eller uppdatera UI
            window.location.href = '/protected.html';
        } else {
            console.error('Login failed', data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

