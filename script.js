//get DOM elements
const generateTicketBtn = document.getElementById('btn');
const fullNameContainer = document.getElementById('full-name');
const inputs = document.querySelectorAll('#input-container input');
const regexError  = document.getElementsByClassName('error');

//create a function expression to contain the logic
const validFullname = () => {
    const fullName = fullNameContainer.value;

    //Regex code to accept just spaces and letters
    const fullNameRegex = /^[A-Za-z\s]+$/; 
    if(!fullName.match(fullNameRegex)){
        fullNameContainer.style.borderColor = 'red';
        return false;
    } else {
        fullNameContainer.style.borderColor = '';
    }

    //confirm the fullname container is not empty
    if(fullName === ''){
        fullNameContainer.style.borderColor = 'red';
        fullnameError.classList.add('show');
        return false;
    } else {
        fullNameContainer.style.borderColor = '';
        return true;
    }
    
}   

// activate the button
generateTicketBtn.addEventListener('click', (event) => {
    //assign function expression to variables
    const isFullNameValid = validFullname();

    if(isFullNameValid){
        console.log('everything works fine', isFullNameValid);
        setTimeout(() => {
            inputs.forEach(input => input.value = '')
        }, 3000);
    } else {
        event.preventDefault();
        console.log('something is wrong', isFullNameValid)
    }
})
