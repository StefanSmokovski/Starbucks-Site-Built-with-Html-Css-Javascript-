document.addEventListener("DOMContentLoaded", function() {
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    
    updateButtonVisibility(isLoggedIn);

    document.querySelector(".navbar-button1").addEventListener("click", function() {
        window.location.href = "login.html";  
    });

    document.querySelector(".navbar-button2").addEventListener("click", function() {
        window.location.href = "signup.html"; 
    });

    document.querySelector(".navbar-button-signout").addEventListener("click", function() {
       
        localStorage.setItem('isLoggedIn', 'false');
        updateButtonVisibility(false);
    });
});

function updateButtonVisibility(isLoggedIn) {
    const signInButton = document.querySelector(".navbar-button1");
    const joinNowButton = document.querySelector(".navbar-button2");
    const signOutButton = document.querySelector(".navbar-button-signout");

    if (isLoggedIn) {
        signInButton.style.display = 'none';
        joinNowButton.style.display = 'none';
        signOutButton.style.display = 'block';
    } else {
        signInButton.style.display = 'block';
        joinNowButton.style.display = 'block';
        signOutButton.style.display = 'none';
    }
}
