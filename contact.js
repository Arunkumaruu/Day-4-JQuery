document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const emailFeedback = document.getElementById('emailFeedback'); 

    // Email validation function
    function validateEmail() {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailFeedback.textContent = 'Please enter a valid email address.';
            emailFeedback.style.color = 'red';
        } else {
            emailFeedback.textContent = '';
        }
    }

    // real-time validation
    emailInput.addEventListener('input', validateEmail);
});