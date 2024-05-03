//Logga ut

document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('logoutBtn');
    myButton.addEventListener('click', function() {
        localStorage.removeItem('authToken');
        window.location.href = '/logout.html';
    });
});