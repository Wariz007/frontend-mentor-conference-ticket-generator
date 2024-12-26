//get DOM elements
const generateTicketBtn = document.getElementById('btn');
const fullNameContainer = document.getElementById('full-name');
const inputs = document.querySelectorAll('#input-container input');
const fullNameErrorMessage = document.getElementById('fullname-error-message');

const emailContainer = document.getElementById('email-address');
const emailErrorMessage = document.getElementById('email-error-message');


//create a function expression to contain the logic
const validateFullName = () => {
    const fullname = fullNameContainer.value.trim();
    let isValid = true;

    //check if fullname container is empty
    if(fullname === ''){
        fullNameContainer.style.borderColor = 'red';
        fullNameErrorMessage.classList.add('show');
        isValid = false;
    } else {
        fullNameErrorMessage.classList.remove('show');
    }

    //now make sure container doesn't accept digits
    const fullNameRegex = /^[A-Za-z\s]+$/;
    if(!fullname.match(fullNameRegex)){
        fullNameErrorMessage.classList.add('show');
        fullNameContainer.style.borderColor = 'red';
        isValid = false;
    } else {
        fullNameErrorMessage.classList.remove('show');
    }

    if(isValid){
        fullNameContainer.style.borderColor = '';
    }

    return isValid;
}
const validateEmail = () => {
    const email = emailContainer.value.trim();
    let isValid = true;

    //make sure email container is not empty
    if(email === ''){
        emailContainer.style.borderColor = 'red';
        emailErrorMessage.classList.add('show');
        isValid = false;
    } else {
        emailContainer.classList.remove('show');
    }

    //email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailRegex)){
        emailErrorMessage.classList.add('show');
        emailContainer.style.borderColor = 'red';
        isValid = false;
    } else {
        emailErrorMessage.classList.remove('show');
    }

    if(isValid){
        emailContainer.style.borderColor = '';
    }

    return isValid;


}

//activate button
generateTicketBtn.addEventListener('click', (event) => {
    //assign function expression to variable 
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();

    if(isFullNameValid &&
        isEmailValid) {
        console.log('validation successful');
        setTimeout(() => {
            inputs.forEach(input => input.value = '')
        }, 3000);
    } else {
        event.preventDefault();
        console.log('validation unsuccessful');
    }
})