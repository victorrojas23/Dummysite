document.addEventListener("DOMContentLoaded", () => {
    const signInText = document.getElementById("signInText");
    
    if(signInText) {
        signInText.addEventListener("click", () => {
            // Redirect to the Sign In page
            window.location.href = "/login.html"; 
        });
    }
});




