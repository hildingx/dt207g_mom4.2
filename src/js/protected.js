window.onload = function() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/index.html'; //Omdirigera till login-sidan om ingen token finns
    }
}

/*
async function fetchAccountDetails() {
  const url = 'https://dt207g-mom4-1.onrender.com/api/user';
  const token = localStorage.getItem('authToken');
  try {
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
      
      const accountDiv = document.getElementById('accountDetails');
      accountDiv.innerHTML = `First Name: ${data.firstname}<br>Last Name: ${data.lastname}`;
  } catch (error) {
      console.error('Failed to fetch account details:', error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAccountDetails();
});
*/