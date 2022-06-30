const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const inputPassword = form.password;
const smallMsg = form.password.nextElementSibling;

/*
    Check if form is not empty 
    ==========================
 */ 
// add listener on form
form.addEventListener('submit', function (e) {

    let  errorMsg;

    // Select all the input to check if isEmpty
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
        if (!input[i].value) {

        errorMsg = "Please fill in all fields !";
            break;
        }       
    }

    // prevent the sumit button while error exists
    if (errorMsg) {
        e.preventDefault();

        smallMsg.innerHTML = errorMsg;
        smallMsg.style.marginTop = '15px';
        smallMsg.style.fontSize = '15px';
        smallMsg.style.color = 'red';
        return false;
    } else {
        smallMsg.innerHTML = '';
    }
    
})


/*
    ====================== input Firstname traitement ======================
 */ 
// add listener for Firstname
form.firstname.addEventListener('change', function() {
   validFirstname(this);
})

// Create function to valide Firstname
const validFirstname = function(inputFirstname) {
    
    // Create RegExp for Firstname validation
    let firstnameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
    
    let testFirstname = firstnameRegExp.test(inputFirstname.value); 

    // Retrieve 'small' tag to display message 
    let small = inputFirstname.nextElementSibling;
    small.style.marginLeft = '65%';

    if (!testFirstname) {
        small.innerHTML = 'Looks like this cannot be an Firstname';
        small.style.marginLeft = '46%';
        small.style.color = 'red';
        
        return false;

    }else if (inputFirstname.value.trim() == '') {
        small.innerHTML = 'Firstname cannot be empty';
        small.style.color = 'red';
        
        return false;
    } else {
        form.lastname.style.border = '1px solid green';
        small.innerHTML = 'Valid Firstname';
        small.style.color = 'green';
    }
}

/*
    ====================== input Lastname traitement ======================
*/ 

// add listener for Lastname
form.lastname.addEventListener('change', function () {
    validLastname(this);
})

// Create function validLastname
const validLastname = function(inputLastname) {

    // Create RegExp to validate Lastname
    let lastnameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
    
    let testLastname = lastnameRegExp.test(inputLastname.value); 

    // Retrieve 'small' tag to display message
    let small = inputLastname.nextElementSibling;
    small.style.marginLeft = '66%';
    
    if (!testLastname) {
        small.innerHTML = 'Looks like this cannot be an Lastname';
        small.style.marginLeft = '46%';
        small.style.color = 'red';
        
        return false;

    }else if (inputLastname.value.trim() == '') {
        small.innerHTML = 'Lastname cannot be empty';
        small.style.color = 'red';
        
        return false;
    } else {
        form.lastname.style.border = '1px solid green';
        small.innerHTML = 'Valid Lastname';
        small.style.color = 'green';
        
        return true;
    }
}

/*
    ====================== input Email traitement ======================
 */ 
// add listener for Email
form.email.addEventListener('change', function() {
    validEmail(this);
})

// Create function validEmail
const validEmail = function(inputEmail) {
    
    // Create RegExp to validate Email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    
    let testEmail = emailRegExp.test(inputEmail.value);
    
    // Retrieve 'small' tag to display message
    let small = inputEmail.nextElementSibling;
    small.style.marginLeft = '50%';

    if (!testEmail) {
        small.innerHTML = 'Looks like this cannot be an email';
        small.style.color = 'red';
        
        return false;
    } else {
        small.innerHTML = 'Valid email';
        form.email.style.border = '1px solid green';
        small.style.color = 'green';
        small.style.marginLeft = '70%';
        
        return true;
    }

}


/*
    ====================== input password traitement ======================
 */ 
// add listener for Password
form.password.addEventListener('change', function() {
    validPassword(this);
})

const validPassword = function(inputPassword) {
    // Create RegExp to validate Password

    // console.log(inputPassword.value);
    let passwordRegExp = new RegExp('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){8,40})');
                                                                            
    let testpassword = passwordRegExp.test(inputPassword.value); 

    // Retrieve 'small' tag to display message
    let small = inputPassword.nextElementSibling;
    small.style.marginLeft = '9%';

    if (!testpassword) {
        small.innerHTML = 'Not less than 8 characters with a digit, lowercase, uppercase, a symbol: \'@#$%\'';
        small.style.color = 'red';
        
        return false;
    }
    else{
        small.innerHTML = 'Valid password';
        small.style.color = 'green';
        small.style.marginLeft = '67%'

        return true;
    }
}