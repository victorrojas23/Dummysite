document.addEventListener("DOMContentLoaded", () => {
    const signInText = document.getElementById("sign-up");
    
    if(signInText) {
        signInText.addEventListener("click", () => {
            // Redirect to the Sign Up page
            window.location.href = "/signUp.html"; 
        });
    }
});