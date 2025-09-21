// Start of DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {

    // Start of submit event listener
    document.getElementById('registrationForm').addEventListener('submit', function (event) {


        // Get form elements
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const postalCode = document.getElementById('postalCode').value;
        const province = document.getElementById('province').value;
        const age = document.getElementById('age').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const email = document.getElementById('email').value;

        // Validate form fields
        if (!firstName || !lastName || !address || !city || !postalCode || !province || !age || !username || !password || !confirmPassword || !email) {
            alert('All fields are required.');
            return;
        }

        // Validate postal code format (A0A0A0)
        const postalCodePattern = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
        if (!postalCodePattern.test(postalCode)) {
            alert('Postal code must be in the format A0A0A0.');
            return;
        }

        // Validate province
        const validProvinces = ['QC', 'ON', 'MN', 'SK', 'AB', 'BC'];
        if (!validProvinces.includes(province)) {
            alert('Province must be one of QC, ON, MN, SK, AB, BC.');
            return;
        }

        // Validate age
        if (age < 18) {
            alert('You must be at least 18 years old.');
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Email must be a valid email address.');
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Validate password strength
        const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            alert('Password must be at least 6 characters long and contain at least one digit and one upper-case character.');
            return;
        }

        // If all validations pass
        alert('Thanks for registering with our website, your account was created successfully.');
    });
});
