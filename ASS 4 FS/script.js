const correctPassword = "secure123"; // Change this to your required password

function activateForm() {
    let passwordInput = document.getElementById("password").value;

    if (passwordInput === correctPassword) {
        document.getElementById("mobile").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("submit-btn").disabled = false;
        alert("Form Activated Successfully!");
    } else {
        alert("Incorrect Password! Access Denied.");
    }
}

function validateForm() {
    let mobileNumber = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    // Regular expression to validate mobile number (10 digits)
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
        alert("Mobile number is not correct.\nIt should be exactly 10 digits.");
        return false;
    }

    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email is not correct.\nEmail must be in the format: user@example.com");
        return false;
    }

    // Show confirmation before submitting
    return confirm("Are you sure you want to submit the form?");
}
