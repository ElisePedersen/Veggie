let form = document.querySelector("#contact-form");
const success = document.querySelector(".success-form");

const fullname = document.querySelector("#fullname");
const fullnameError = document.querySelector("#fullnameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault();

    if (checkLength(fullname.value, 5) === true) {
        fullnameError.style.display = "none";
    } else {
        fullnameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if ((checkLength(fullname.value, 5) && validateEmail(email.value) && checkLength(subject.value, 15) && checkLength(message.value, 25)) === true) {
        success.innerHTML = `<p>Form was successfully submitted.</p>`
    } 
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);    
    return patternMatches;
}

