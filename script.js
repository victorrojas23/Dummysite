   //"Log in" button by its ID
const loginBtn = document.getElementById("login-btn1");

// Add a click event listener to the "Log in" button
loginBtn.addEventListener('click', () => {
    // Redirect to the login.html page
    window.location.href = 'login.html';
});

// Find the "Log in" button by its ID
const signBtn = document.getElementById('sing-btn');

// Add a click event listener to the "Log in" button
signBtn.addEventListener('click', () => {
    // Redirect to the signUp.html page
    window.location.href = 'signUp.html';
});

// Find the "Log in" button by its ID
const getStart = document.getElementById('footer-btn-white');

getStart.addEventListener('click', () => {
    // Redirect to the signUp.html page
    window.location.href = 'signUp.html';
});