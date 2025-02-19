const form = document.getElementById('from');
const passwordEl =  document.getElementById('password');
const passwordConfirmEl =  document.getElementById('validate-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();

    if(!isValid) {
        message.textContent = "Please Fill Out All Fields.";
        message.style.color = 'crimson';
        messageContainer.style.borderColor = 'crimson';
        return;
    }
    if(passwordEl.value === passwordConfirmEl.value) {
        passwordsMatch = true;
        passwordEl.style.borderColor= 'lawngreen';
        passwordConfirmEl.style.borderColor= 'lawngreen';
    } else {
        passwordsMatch = false;
        message.textContent = 'Passwords Must Match';
        message.style.color = 'crimson';
        messageContainer.style.borderColor = 'crimson';
        passwordEl.style.borderColor = 'crimson';
        passwordConfirmEl.style.borderColor = 'crimson';
        return;
    }
    // If Form Is Valid & Passwords Match
    if(isValid && passwordsMatch) {
        message.textContent = 'successfully Registered!';
        message.style.color = 'lawngreen';
        messageContainer.style.borderColor = 'lawngreen';
    }
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);