document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    if (!name || !email || !password || !confirm) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirm) {
        alert('Passwords do not match.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    console.log('Account created:', name, email);
    window.location.href = 'signin.html';
});