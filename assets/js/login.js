var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("indicator");
var loginButton = document.getElementById("loginButton");
var loginUsername = document.getElementById("loginUsername");
var loginError = document.getElementById("loginError");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

loginButton.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default form submission
    var username = loginUsername.value.trim();
    
    if (!username.endsWith("@gmail.com")) {
        loginError.textContent = "Please enter a valid user name";
        loginError.style.display = "block";
        return;
    }

    // If username is valid, proceed with login
    loginError.style.display = "none";

    // Add fade-out effect to the entire body
    document.body.classList.add("fade-out");
    
    // Delay the redirect to allow the fade-out effect to complete
    setTimeout(function() {
        window.location.href = "index.html";
    }, 500); // 500ms delay to match the CSS transition duration
});

// Set initial state to show login form
window.onload = function() {
    login();
}