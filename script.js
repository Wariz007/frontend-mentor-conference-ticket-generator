//get DOM elements
const generateTicketBtn = document.getElementById('btn');
const fullNameContainer = document.getElementById('full-name');
const inputs = document.querySelectorAll('#input-container input');
const fullNameErrorMessage = document.getElementById('fullname-error-message');

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

//activate button
generateTicketBtn.addEventListener('click', (event) => {
    //assign function expression to variable 
    const isFullNameValid = validateFullName();

    if(isFullNameValid){
        console.log('validation successful', isFullNameValid);
        setTimeout(() => {
            inputs.forEach(input => input.value = '')
        }, 3000);
    } else {
        event.preventDefault();
        console.log('validation unsuccessful', isFullNameValid);
    }
})