// Get form and input fields
const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    let hasError = false;

    // Check if First Name is empty
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name is required';
        hasError = true;
    } else {
        firstNameError.textContent = '';
    }

    // Check if Last Name is empty
    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Last name is required';
        hasError = true;
    } else {
        lastNameError.textContent = '';
    }

    // Check if Email is empty or invalid
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        hasError = true;
    } else if (!email.validity.valid) {
        emailError.textContent = 'Invalid email format';
        hasError = true;
    } else {
        emailError.textContent = '';
    }

    // Check if Password is empty
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        hasError = true;
    } else {
        passwordError.textContent = '';
    }

    // Prevent form submission if there is an error
    if (hasError) {
        event.preventDefault();
    }
});
