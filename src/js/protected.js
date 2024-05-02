window.onload = function() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/index.html'; // Omdirigera till login-sidan om ingen token finns
    }
    console.log("Token existerar" + token);
}

console.log("test");