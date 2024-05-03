window.onload = function() {
  //Hämta token
  const token = localStorage.getItem('authToken');
  //Kolla om token finns, annars omdirigera till förstasidan
  if (!token) {
    window.location.href = '/index.html';
  }
}

//Funktion för att hämta användardata och skriva ut DOM.
async function fetchAccountDetails() {
  const url = 'https://dt207g-mom4-1.onrender.com/api/userdata';
  const token = localStorage.getItem('authToken');
  try {
    //Fetch-anrop med header och token för autentisering
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    //Skriv ut i DOM
    const accountDiv = document.getElementById('accountDetails');
    const h2 = document.createElement('h2');
    const textNode = document.createTextNode(`Välkommen ${data.firstname} ${data.lastname}!`);
    h2.appendChild(textNode);
    accountDiv.appendChild(h2);

  } catch (error) {
      console.error('Failed to fetch account details:', error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAccountDetails();
});