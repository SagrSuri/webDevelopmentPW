document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email and password
    const isValidEmail = email.includes('@');
    const isValidPassword = password.length >= 8;

    if (isValidEmail && isValidPassword) {
        displayMessage('Valid email and password!', 'success-message');
    } else {
        displayMessage('Invalid email or password!', 'error-message');
    }
});

function displayMessage(message, className) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.className = className;
}
