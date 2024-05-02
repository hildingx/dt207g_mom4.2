document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    
    const errorEl = document.getElementById('formError');
    const expAddedEl = document.getElementById('expAdded');
    const form = document.getElementById('registerForm');

    //Validera input för att kontrollera att inga fält är tomma
    if (!username || !password || !firstname || !lastname) {
        errorEl.innerHTML = 'Alla fält måste fyllas i. <br> Vänligen kontrollera dina inmatningar.';
        errorEl.style.display = 'block';
        return;
    }

    //Objekt med insamlad användardata
    const userData = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname
    };

    try {
        const response = await fetch('https://dt207g-mom4-1.onrender.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            errorEl.innerHTML = 'Användare kunde inte läggas till';
            errorEl.style.display = 'block';
        } else {
            expAddedEl.innerHTML = 'Användare tillagd';
            expAddedEl.style.display = 'block';
            //Rensa formuläret
            form.reset();
        }
    } catch (error) {
        console.error('Det gick inte att lägga till användare:', error);
        errorEl.textContent = 'Användare kunde inte läggas till.';
        errorEl.style.display = 'block';
    }
});