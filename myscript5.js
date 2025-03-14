document.getElementById("visible").addEventListener(
    "change",function(){
        let passwordField = document.getElementById("password");
        passwordField.type = this.checked ? "text" :"password";
    }
);

document.getElementById("visiblen").addEventListener(
    "change",function(){
        let passwordConfirm = document.getElementById("confirmPassword");
        passwordConfirm.type = this.checked ? "text" :"password";
    }
);

document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let genders = document.getElementsByName("ge");
    let passConfirm = document.getElementById("confirmPassword").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let genderError = document.getElementById("genderError");
    let confirmationError = document.getElementById("confirmationError");

    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    genderError.innerText = "";
    let isValid = true;
    let selected = false;

    if (name === "") {
        nameError.innerText = "Name is required.";
        isValid = false;
    }

    for(let gender of genders) {
        if (gender.checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        genderError.innerText = " Select a Gender Huoni hadi nimekuekea LBTQ";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email.";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerText = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if ( passConfirm !== password){
        confirmationError.innerText = "passwords do not match !!";
        isValid = false;
    }
    else if (passConfirm === "") {
        confirmationError.innerText = " password confirmation required ";
        isValid =false;
    }

    if (isValid) {
        alert("Subscription successful!");
        document.getElementById("subscriptionForm").reset();
    }
});