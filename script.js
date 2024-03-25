const loginForm = document.getElementById('login-form');
const usernameEmail = document.getElementById('username-email');
const password = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validation (basic example, consider using a library for more robust validation)
  if (usernameEmail.value === '' || password.value === '') {
    alert('Please fill in all required fields!');
    return;
  }

  // Simulate form submission (replace with actual login logic)
  alert(`Logging in with username/email: ${usernameEmail.value} and password: ${password.value}`);

  // Clear form fields after successful login (or redirect to another page)
  loginForm.reset();
});
