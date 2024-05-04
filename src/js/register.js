document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    
    const errorEl = document.getElementById('formError');
    const expAddedEl = document.getElementById('expAdded');
    const form = document.getElementById('registerForm');

    //Laddningsindikator
    const loadingIndicatorEl = document.getElementById('loadingIndicator');
    //Visa laddningsindikator
    loadingIndicatorEl.style.display = 'block';

    //Rensa tidigare felmeddelanden
    errorEl.textContent = '';
    errorEl.style.display = 'none';
    expAddedEl.textContent = '';
    expAddedEl.style.display = 'none';

    //Validera input för att kontrollera att inga fält är tomma
    if (!username || !password || !firstname || !lastname) {
        errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Alla fält måste fyllas i. <br> Vänligen kontrollera dina inmatningar.';
        errorEl.style.display = 'block';
        loadingIndicatorEl.style.display = 'none';
        return;
    }

    //Skapa objekt med insamlad användardata från regformuläret
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
            errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Användare kunde inte läggas till';
            errorEl.style.display = 'block';
        } else {
            expAddedEl.innerHTML = '<i class="fas fa-check"></i> Användare tillagd';
            expAddedEl.style.display = 'block';
            //Rensa formuläret
            form.reset();
        }
    } catch (error) {
        console.error('Det gick inte att lägga till användare:', error);
        errorEl.textContent = '<i class="fas fa-exclamation-circle"></i> Användare kunde inte läggas till. Serverfel.';
        errorEl.style.display = 'block';
    }
    loadingIndicatorEl.style.display = 'none';
});