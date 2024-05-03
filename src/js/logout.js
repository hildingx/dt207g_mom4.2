//Logga ut
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtnHeader = document.getElementById('logoutBtnHeader');
    const logoutBtnMain = document.getElementById('logoutBtnMain');

    if (logoutBtnHeader) {
        logoutBtnHeader.addEventListener('click', logoutFunction);
    }

    if (logoutBtnMain) {
        logoutBtnMain.addEventListener('click', logoutFunction);
    }
});

function logoutFunction() {
    localStorage.removeItem('authToken');
    window.location.href = '/logout.html';
}