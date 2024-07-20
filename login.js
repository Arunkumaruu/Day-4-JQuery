document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const passwordStrengthIndicator = document.getElementById('password-strength');
    const showPasswordCheckbox = document.getElementById('showPassword');

    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', function () {
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    // Password strength check
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);
        passwordStrengthIndicator.textContent = strength.message;
        passwordStrengthIndicator.style.color = strength.color;
    });

    function checkPasswordStrength(password) {
        let strength = {
            message: 'Weak',
            color: '#ff0000' // Red
        };

        if (password.length >= 8) {
            strength.message = 'Medium';
            strength.color = 'blue'; //blue
        }

        if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
            strength.message = 'Strong';
            strength.color = '#00ff00'; // Green
        }

        return strength;
    }
});