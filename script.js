//get DOM elements
//button element
const generateTicketBtn = document.getElementById('btn');

//fullname elements
const fullNameContainer = document.getElementById('full-name');
const inputs = document.querySelectorAll('#input-container input');
const fullNameErrorMessage = document.getElementById('fullname-error-message');

//email elements
const emailContainer = document.getElementById('email-address');
const emailErrorMessage = document.getElementById('email-error-message');

//github username elements
const usernameContainer = document.getElementById('github-username');
const usernameErrorMessage = document.getElementById('githubusername-error-message');

//pages
const formPage = document.getElementById('fm-container');
const ticketPage = document.getElementById('ticket-container');

//ticket container page code
const headingNotification = document.getElementById('h1-notification');
const subHeadingNotification = document.getElementById('sub-heading-notification');
const ticketName = document.getElementById('name');
const username = document.getElementById('username');

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
const validateUsername = () => {
    const username = usernameContainer.value.trim();
    let isValid = true;

    if(username === ''){
        usernameContainer.style.borderColor = 'red';
        usernameErrorMessage.classList.add('show');
        isValid = false;
    } else {
        usernameErrorMessage.classList.remove('show');
        usernameContainer.style.borderColor = '';
    }

    return isValid;

}

//activate button
generateTicketBtn.addEventListener('click', (event) => {
    //assign function expression to variable 
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isUsernameValid = validateUsername();

    if(isFullNameValid && isEmailValid && isUsernameValid) {
        console.log('validation successful');
        
        //pages
        formPage.style.display = 'none';
        ticketPage.style.display = 'block';
        console.log(ticketPage);


        headingNotification.innerHTML = `Congrats, ${fullNameContainer.value} Your ticket is ready.`;
        subHeadingNotification.innerHTML = `We've emailed your ticket to ${emailContainer.value} and will send updates in the run up to the event.`;
        ticketName.innerHTML = `${fullNameContainer.value}`;
        username.innerHTML = `@${usernameContainer.value}`;
    } else {
        event.preventDefault();
        console.log('validation unsuccessful');
    }
})  