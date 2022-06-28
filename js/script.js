let form = document.querySelector('#loginForm');

// add listener for Firstname
form.email.addEventListener('change', function() {
    validEmail(this);
})

// Create function to valide Email
const validEmail = function(inputEmail) {
    
    // Create of RegExp for Email validation
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    
    let testEmail = emailRegExp.test(inputEmail.value); 

    // Catch the 'small' tag
    let small = inputEmail.nextElementSibling;
    const smallStyle = document.querySelector('div');

    if (testEmail) {
        smallStyle.style.display = 
        small.innerHTML = 'Adresse valide';

    }else{
        small.innerHTML = 'Looks like this cannot be an email';
    }
}
// add listener for Lastname

// add listener for Email

// add listener for Password