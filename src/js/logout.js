//Logga ut
function logOut() {
    localStorage.removeItem('authToken');
    window.location.href = '/login.html';
}