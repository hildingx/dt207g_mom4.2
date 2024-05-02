//Logga ut
/*
function removeTokenAndSendBack() {
    localStorage.removeItem('authToken');
    window.location.href = '/index.html';
}
*/
document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('logoutBtn');
    myButton.addEventListener('click', function() {
        localStorage.removeItem('authToken');
        window.location.href = '/index.html';
    });
});