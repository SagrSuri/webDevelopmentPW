document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password === confirmPassword) {
        document.getElementById('message').textContent = "Password Matched. Password validation Successful.";
    } else {
        document.getElementById('message').textContent = "Password didn't match. Password validation unsuccessful";
    }
});
