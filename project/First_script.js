// For Login Page
function validateLoginForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "") {
        alert("Username cannot be empty");
        return false;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return false;
    }

    // You can add more validations or connect with the backend here.
    return true;
}

// For Sign-Up Page
function validateSignUpForm() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (username === "") {
        alert("Username cannot be empty");
        return false;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return false;
    }

    // Optionally, you can check for password strength.
    return true;
}

// Add event listeners to the form on page load
window.onload = function() {
    // For login form
    const loginForm = document.querySelector(".login-box form");
    if (loginForm) {
        loginForm.onsubmit = validateLoginForm;
    }

    // For sign-up form
    const signUpForm = document.querySelector(".signup-box form");
    if (signUpForm) {
        signUpForm.onsubmit = validateSignUpForm;
    }
    // Handle button click and "Enter" key press
document.getElementById("login1").onclick = function () {
    window.location.href = "DashBoard_page.html"; // Link to about.html in the same folder
};

// Handle "Enter" key press to trigger the same action
document.addEventListener('Enter', function (event) {
    if (event.key === 'Enter') {
        window.location.href = "DashBoard_page.html"; // Link to about.html in the same folder
    }
});
};
