function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?\d{10,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    const errors = {};
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        errors.firstName = 'First Name is required.';
        isValid = false;
    }
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        errors.lastName = 'Last Name is required.';
        isValid = false;
    }
    const email = document.getElementById('email').value.trim();
    if (!email) {
        errors.email = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(email)) {
        errors.email = 'Please enter a valid email address.';
        isValid = false;
    }
    const contactNo = document.getElementById('contactNo').value.trim();
    if (!contactNo) {
        errors.contactNo = 'Contact Number is required.';
        isValid = false;
    } else if (!validatePhone(contactNo)) {
        errors.contactNo = 'Please enter a valid contact number (10-15 digits).';
        isValid = false;
    }
    const id = document.getElementById('id').value.trim();
    if (!id) {
        errors.id = 'ID is required.';
        isValid = false;
    } else if (!/^\d{1,10}$/.test(id)) { 
        errors.id = 'ID must be numeric and up to 10 digits.';
        isValid = false;
    }
    const course = document.getElementById('course').value;
    if (!course) {
        errors.course = 'Please select a course.';
        isValid = false;
    }
    const batch = document.getElementById('batch').value;
    if (!batch) {
        errors.batch = 'Please select a batch.';
        isValid = false;
    }
    for (const field in errors) {
        document.getElementById(`${field}Error`).textContent = errors[field];
    }
    if (isValid) {
        alert('Registration successful!');
    }
    return isValid;
}
document.getElementById('registrationForm').addEventListener('submit', validateForm);